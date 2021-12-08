import { Field } from '@nestjs/graphql';
import { TemplateDto } from '../../../../../core/templates/_template.dto';
import { Dto } from '@shared/infrastructure/modules/decorators/dto.decorator';

@Dto(CountryDto)
export class CountryDto extends TemplateDto {
  @Field(() => String)
  flag: string;

  @Field(() => String)
  code!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  continent!: string;

  @Field(() => String)
  currencyId!: string;

  @Field(() => String)
  phoneCode!: string;
}
