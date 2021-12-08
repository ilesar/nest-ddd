import { GraphqlModule } from './modules/graphql/graphql.module';
import { InfrastructureConfigInterface } from '@root/core/interfaces/infrastructure-config.interface';
import { AuthModule } from '@user/infrastructure/modules/auth/auth.module';

export const infrastructureConfig: InfrastructureConfigInterface = {
  modules: [GraphqlModule, AuthModule],
};
