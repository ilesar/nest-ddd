import {
  AggregateQuery,
  AggregateResponse,
  DeepPartial,
  Query,
} from '@nestjs-query/core';
import { TemplateEntity } from '@core/templates/_template.entity';
import { TemplateDto } from '@root/core/templates/_template.dto';

export interface TemplateAssemblerInterface<
  D extends TemplateDto,
  E extends TemplateEntity,
> {
  convertQuery(query: Query<D>): Query<E>;

  convertToDTO(entity: E): D;

  convertToEntity(dto: D): E;

  convertAggregateQuery(aggregate: AggregateQuery<D>): AggregateQuery<E>;

  convertAggregateResponse(
    aggregate: AggregateResponse<E>,
  ): AggregateResponse<D>;

  convertToUpdateEntity({ id }: DeepPartial<D>): DeepPartial<E>;
}
