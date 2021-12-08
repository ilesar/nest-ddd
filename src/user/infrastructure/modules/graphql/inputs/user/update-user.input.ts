import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UserInput } from '@shared/infrastructure/modules/graphql/inputs/user.input';
import { UpdateUserCountryInput } from '@user/infrastructure/modules/graphql/inputs/user/update-user-country.input';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(UserInput, ['id'] as const),
) {
  @Field({
    nullable: true,
  })
  country: UpdateUserCountryInput;
}
