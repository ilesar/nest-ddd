import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { CqrsModule } from '@nestjs/cqrs';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationConfigInterface } from '@root/core/interfaces/application-config.interface';
import { DomainConfigInterface } from '@root/core/interfaces/domain-config.interface';
import { InfrastructureConfigInterface } from '@root/core/interfaces/infrastructure-config.interface';

export class InjectionUtil {
  static getInfrastructureLayerConfiguration(
    infrastructureConfig: InfrastructureConfigInterface,
    applicationLayer: any,
  ): any {
    return {
      imports: [...infrastructureConfig.modules, applicationLayer],
      providers: infrastructureConfig.providers ?? [],
      exports: [],
    };
  }

  static getApplicationLayerConfiguration(
    applicationConfig: ApplicationConfigInterface,
    domainLayer: any,
  ): any {
    return {
      imports: [
        domainLayer,
        ...applicationConfig.modules,
        CqrsModule,
        TypeOrmModule.forFeature(applicationConfig.repositories),
      ],
      providers: [
        ...applicationConfig.commandHandlers,
        ...applicationConfig.queryHandlers,
        ...applicationConfig.eventHandlers,
        ...applicationConfig.validators,
        ...applicationConfig.subscribers,
        ...applicationConfig.services.map((service) =>
          this.injectCustomService(service),
        ),
        ...(() => {
          if (applicationConfig.providers) {
            return applicationConfig.providers;
          }

          return [];
        })(),
      ],
      exports: [],
    };
  }

  static getDomainLayerConfiguration(domainConfig: DomainConfigInterface): any {
    return {
      imports: [],
      providers: [...domainConfig.services, ...domainConfig.validators],
      exports: [...domainConfig.services, ...domainConfig.validators],
    };
  }

  static getGraphQLModuleConfiguration(
    graphqlCrudMap: any,
    imports: any[] = [],
    providers: any[] = [],
    exports: any[] = [],
  ): any {
    return {
      imports: [
        NestjsQueryGraphQLModule.forFeature({
          imports: [
            CqrsModule,
            NestjsQueryTypeOrmModule.forFeature(
              graphqlCrudMap.map((entityItem) => entityItem.entity),
            ),
          ],
          assemblers: graphqlCrudMap
            .map((entityItem) => entityItem.assembler)
            .filter(Boolean),
          dtos: graphqlCrudMap.map((entityItem) => {
            return { DTOClass: entityItem.dto };
          }),
        }),
        ...imports,
      ],
      providers: [
        ...graphqlCrudMap.map((entityItem) => entityItem.resolver),
        ...providers,
      ],
      exports,
    };
  }

  private static injectCustomService(service: any): any {
    return {
      provide: service.name,
      useClass: service,
    };
  }
}
