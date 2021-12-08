import { IDField } from '@nestjs-query/query-graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TemplateInput {
  @IDField(() => String)
  id!: string;
}
