import { InputType, PickType } from '@nestjs/graphql';
import { SomethingInput } from './something.input';

@InputType()
export class CreateSomethingInput extends PickType(
  SomethingInput,
  [] as const,
) {}
