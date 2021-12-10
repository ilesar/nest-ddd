import { applyDecorators } from '@nestjs/common';
import { InputType, ObjectType } from '@nestjs/graphql';
import { GraphqlUtil } from '@core/utils/graphql.util';

export function Dto(dto: any, options?: { abstract?: boolean }) {
  return applyDecorators(
    InputType({ isAbstract: !options?.abstract }),
    ObjectType(GraphqlUtil.generateDtoNameForSchema(dto)),
  );
}
