import { TemplateCommand } from '@core/templates/_template.command';
import { UserRole } from '@shared/domain/enums/user-role.enum';

export class CreateUserCommand extends TemplateCommand {
  constructor(
    readonly externalId: string,
    readonly phoneNumber: string,
    readonly role: UserRole,
    readonly countryId: string,
  ) {
    super({
      externalId,
      phoneNumber,
      role,
      countryId,
    });
  }
}
