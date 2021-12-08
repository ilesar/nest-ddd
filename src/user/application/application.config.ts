import { ApplicationConfigInterface } from '@root/core/interfaces/application-config.interface';
import { CreateUserCommandHandler } from '@user/application/handlers/command/create-user.command-handler';
import { UpdateUserCommandHandler } from '@user/application/handlers/command/update-user.command-handler';
import { UserTypeormRepository } from '@user/infrastructure/modules/database/repositories/user-typeorm.repository';
import { CountryTypeormRepository } from '@user/infrastructure/modules/database/repositories/country-typeorm.repository';
import { GraphqlModule } from '@shared/infrastructure/modules/graphql/graphql.module';
import { CqrsModule } from '@nestjs/cqrs';

import { IdentityManager } from '@user/infrastructure/modules/auth/services/identity-manager.service';
import { JwtWebService } from '@user/infrastructure/modules/auth/services/jwt-web.service';
import { AuthModule } from '@user/infrastructure/modules/auth/auth.module';
import { GetUserQueryHandler } from './handlers/queries/get-user.query-handler';

export const applicationConfig: ApplicationConfigInterface = {
  modules: [AuthModule, GraphqlModule, CqrsModule],
  commandHandlers: [CreateUserCommandHandler, UpdateUserCommandHandler],
  queryHandlers: [GetUserQueryHandler],
  eventHandlers: [],
  subscribers: [],
  repositories: [UserTypeormRepository, CountryTypeormRepository],
  validators: [],
  services: [IdentityManager, JwtWebService],
};
