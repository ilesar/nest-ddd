import { InputType, OmitType } from '@nestjs/graphql';
import { SomethingInput } from './something.input';

@InputType()
export class CreateSomethingInput extends OmitType(SomethingInput, [
      'id',
      'createdAt',
      'updatedAt',
    ] as const) {
}
