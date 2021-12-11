import { ApplicationConfigInterface } from '@root/core/interfaces/application-config.interface';
import { GraphqlModule } from '@shared/infrastructure/modules/graphql/graphql.module';

export const applicationConfig: ApplicationConfigInterface = {
  modules: [GraphqlModule],
  commandHandlers: [],
  queryHandlers: [],
  eventHandlers: [],
  subscriberHandlers: [],
  repositories: [],
  validators: [],
  services: [],
};
