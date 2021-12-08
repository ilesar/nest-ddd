import { InputType, PickType } from '@nestjs/graphql';
import { CountryInput } from '@shared/infrastructure/modules/graphql/inputs/country.input';

@InputType()
export class UpdateUserCountryInput extends PickType(CountryInput, [
  'id',
] as const) {}
