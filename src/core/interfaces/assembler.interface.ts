import { TemplateEntity } from '@core/templates/_template.entity';
import { QueryFieldMap } from '@nestjs-query/core';
import { TemplateDto } from '@core/templates/_template.dto';

export interface AssemblerInterface<
  D extends TemplateDto,
  E extends TemplateEntity,
> {
  getEntityInstance(): E;
  getMapping(): QueryFieldMap<D, E>;
}
