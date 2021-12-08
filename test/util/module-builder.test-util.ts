import { Test } from '@nestjs/testing';
import { ModuleMetadata } from '@nestjs/common';
import { GraphqlTestUtil } from './graphql.test-util';

export class ModuleBuilderTestUtil {
  public static async createTestModule(moduleDefinition: ModuleMetadata) {
    const moduleRef = await Test.createTestingModule(
      moduleDefinition,
    ).compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    GraphqlTestUtil.server = app.getHttpServer();

    return app;
  }
}
