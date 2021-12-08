import { InputType, OmitType } from '@nestjs/graphql';
import { CountryDto } from '@shared/infrastructure/modules/graphql/dtos/country.dto';

@InputType({ isAbstract: true })
export class CountryInput extends OmitType(CountryDto, [
  'flag',
  'createdAt',
  'updatedAt',
] as const) {}
