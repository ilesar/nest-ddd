import { CreateUserCommand } from '../../commands/create-user.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserManagementService } from '@user/domain/services/user-management.service';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateCommandHandler } from '@root/core/templates/_template.command-handler';
import { CountryTypeormRepository } from '@user/infrastructure/modules/database/repositories/country-typeorm.repository';
import { CountryRepositoryInterface } from '@shared/domain/repositories/country-repository.interface';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  extends TemplateCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    @InjectRepository(CountryTypeormRepository)
    private countryRepository: CountryRepositoryInterface,
    private readonly userManagementService: UserManagementService,
  ) {
    super();
  }

  async execute(command: CreateUserCommand) {
    // const { externalId, phoneNumber, role, countryId } = command;
    //
    // const user = this.userManagementService.createUser(
    //   identity,
    //   phoneNumber,
    //   role,
    //   country,
    // );
    //
    // await this.identityRepository.store(user.identity);
    //
    // return user;
  }
}
