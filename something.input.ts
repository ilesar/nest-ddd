import { InputType, PickType } from '@nestjs/graphql';
import { SomethingDto } from './something.dto';

@InputType()
export class SomethingInput extends PickType(SomethingDto, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {
}
