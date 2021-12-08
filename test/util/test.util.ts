import { Test } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';
import * as faker from 'faker';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as databaseConfig from '@shared/infrastructure/config/database.config';

export class TestUtil {
  static async createTestApplication(
    imports: any[],
    providers: any[],
    repositories: any[] = [],
  ) {
    const moduleRef = Test.createTestingModule({
      imports: [
        CqrsModule,
        ...imports,
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature(
          repositories
            .map((repository) => repository.repositoryClass)
            .filter(Boolean),
        ),
      ],
      providers: [...providers],
    });

    this.overrideRepositories(moduleRef, repositories);
    const compiledModule = await moduleRef.compile();

    return {
      application: await this.buildAppFromModule(compiledModule),
      module: compiledModule,
    };
  }

  private static async buildAppFromModule(module) {
    const app = module.createNestApplication();
    await app.init();

    return app;
  }

  private static overrideRepositories(module, repositories: any[]) {
    for (const repository of repositories) {
      module
        .overrideProvider(repository.repositoryClass)
        .useValue(this.createMockRepository(repository));
    }
  }

  static createMockRepository(repository: any) {
    const database: Map<string, any> = new Map(repository.values);
    return {
      load: (id) => {
        const result = database.get(id);

        if (result) {
          return result;
        }

        return null;
      },
      loadMany: (ids) => {
        const result = [];
        for (const id of ids) {
          const model = database.get(id);

          if (model) {
            result.push(model);
          }
        }

        return result;
      },
      store: (model) => {
        model.id = faker.datatype.uuid();
        database.set(model.id, model);

        return model;
      },
      storeMany: (models: any[]) => {
        for (const model of models) {
          model.id = faker.datatype.uuid();
          database.set(model.id, model);
        }

        return models;
      },
      ...repository.methods,
    };
  }
}
