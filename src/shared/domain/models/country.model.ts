import { TemplateModel } from '@root/core/templates/_template.model';
import { User } from './user.model';

export class Country extends TemplateModel {
  code: string;

  name: string;

  continent: string;

  currencyId: string;

  phoneCode: string;

  flag: string;

  users: User[];
}
