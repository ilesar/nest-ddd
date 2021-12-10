import {
  InputType,
  PartialType,
  IntersectionType,
  PickType,
} from '@nestjs/graphql';
import { CreateSomethingInput } from './create-something.input';
import { TemplateDto } from '@core/templates/_template.dto';

@InputType()
export class UpdateSomethingInput extends IntersectionType(
  PickType(TemplateDto, ['id'] as const),
  PartialType(
    PickType(CreateSomethingInput, [
      /* updateable properties here */
    ] as const),
  ),
) {
}
