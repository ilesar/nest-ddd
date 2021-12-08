import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType('Template')
export class TemplateDto {
  @IDField(() => String)
  id!: string;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
