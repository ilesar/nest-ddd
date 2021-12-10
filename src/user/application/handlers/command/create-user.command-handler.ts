import { CreateUserCommand } from '../../commands/create-user.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserManagementService } from '@user/domain/services/user-management.service';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateCommandHandler } from '@root/core/templates/_template.command-handler';
import { CountryTypeormRepository } from '@user/infrastructure/modules/database/repositories/country-typeorm.repository';
import { CountryRepositoryInterface } from '@shared/domain/repositories/country-repository.interface';
import { UserRepositoryInterface } from '@shared/domain/repositories/user-repository.interface';
import { Country } from '@shared/domain/models/country.model';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler extends TemplateCommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(CountryTypeormRepository)
    private userRepository: UserRepositoryInterface,
    @InjectRepository(CountryTypeormRepository)
    private countryRepository: CountryRepositoryInterface,
    private readonly userManagementService: UserManagementService,
  ) {
    super();
  }

  async execute(command: CreateUserCommand) {
    const { role, countryId } = command;

    const country = await this.resolveModel<Country>(
      this.countryRepository,
      countryId,
    );

    const user = this.userManagementService.createUser(role, country);

    await this.userRepository.store(user);

    return user;
  }
}
