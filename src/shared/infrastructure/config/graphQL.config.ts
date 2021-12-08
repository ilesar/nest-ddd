import { GqlModuleAsyncOptions } from '@nestjs/graphql/dist/interfaces/gql-module-options.interface';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Environment } from '@root/core/enums/environment.enum';

export const graphQLConfig: GqlModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    return {
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      context: ({ req, connection }) =>
        connection
          ? {
              req: {
                headers: {
                  authorization: connection.context['Authorization']
                    ? connection.context['Authorization']
                    : connection.context['authorization'],
                },
              },
            }
          : { req },
      playground:
        configService.get<string>('APP_ENV') === Environment.Development,
      introspection:
        configService.get<string>('APP_ENV') === Environment.Development,
      installSubscriptionHandlers: true,
      tracing: configService.get<string>('GRAPHQL_TRACING') === 'true',
    };
  },
  inject: [ConfigService],
};
