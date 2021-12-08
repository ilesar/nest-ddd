import { Module } from '@nestjs/common';
import { graphqlCrudMap } from '../../config/graphQL.config';
import { InjectionUtil } from '@root/core/utils/injection.util';
import { GraphqlModule as SharedGraphqlModule } from '@shared/infrastructure/modules/graphql/graphql.module';
import { AuthModule } from '@user/infrastructure/modules/auth/auth.module';

const IMPORTS = [SharedGraphqlModule, AuthModule];
const PROVIDERS = [];

@Module(
  InjectionUtil.getGraphQLModuleConfiguration(
    graphqlCrudMap,
    IMPORTS,
    PROVIDERS,
  ),
)
export class GraphqlModule {}
