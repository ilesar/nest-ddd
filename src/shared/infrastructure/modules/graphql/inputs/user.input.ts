import { InputType, OmitType } from '@nestjs/graphql';
import { UserDto } from '@shared/infrastructure/modules/graphql/dtos/user.dto';

@InputType({ isAbstract: true })
export class UserInput extends OmitType(UserDto, [
  'createdAt',
  'updatedAt',
] as const) {}
