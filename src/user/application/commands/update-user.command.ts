import { TemplateCommand } from '@root/core/templates/_template.command';
import { UserRole } from '@shared/domain/enums/user-role.enum';
import { User } from '@shared/domain/models/user.model';

export class UpdateUserCommand extends TemplateCommand {
  constructor(
    public readonly user: User,
    public readonly role: UserRole,
    public readonly countryId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly avatarUrl: string,
    public readonly email: string,
  ) {
    super({
      user,
      role,
      countryId,
      firstName,
      lastName,
      avatarUrl,
      email,
    });
  }
}
