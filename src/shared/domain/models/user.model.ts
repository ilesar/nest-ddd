import { TemplateModel } from '@root/core/templates/_template.model';
import { UserRole } from '@shared/domain/enums/user-role.enum';
import { UserType } from '@shared/domain/enums/user-type.enum';
import { Country } from '@shared/domain/models/country.model';

export class User extends TemplateModel {
  role: UserRole;

  firstName?: string;

  lastName?: string;

  avatarUrl: string;

  email?: string;

  country: Country;

  type: UserType;
}
