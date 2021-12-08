import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../../commands/update-user.command';
import { UserRepositoryInterface } from '@shared/domain/repositories/user-repository.interface';
import { CountryRepositoryInterface } from '@shared/domain/repositories/country-repository.interface';
import { UserManagementService } from '@user/domain/services/user-management.service';
import { UserTypeormRepository } from '@user/infrastructure/modules/database/repositories/user-typeorm.repository';
import { CountryTypeormRepository } from '@user/infrastructure/modules/database/repositories/country-typeorm.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateCommandHandler } from '@root/core/templates/_template.command-handler';
import { Country } from '@shared/domain/models/country.model';
import { User } from '@shared/domain/models/user.model';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  extends TemplateCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  constructor(
    @InjectRepository(UserTypeormRepository)
    private userRepository: UserRepositoryInterface,
    @InjectRepository(CountryTypeormRepository)
    private countryRepository: CountryRepositoryInterface,
    private readonly userManagementService: UserManagementService,
  ) {
    super();
  }

  async execute(command: UpdateUserCommand) {
    const { user, role, countryId, firstName, lastName, avatarUrl, email } =
      command;

    const country: Country = await this.resolveModel<Country>(
      this.countryRepository,
      countryId,
      [],
      false,
    );

    const updatedUser: User = this.userManagementService.updateUser(user, {
      role,
      firstName,
      lastName,
      avatarUrl,
      country,
      email,
    });

    await this.userRepository.store(updatedUser);

    return await this.userRepository.load(updatedUser.id);
  }
}
