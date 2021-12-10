import { QueryHandler } from '@nestjs/cqrs';
import { SomethingQuery } from './something.query';
import { TemplateQueryHandler } from '@core/templates/_template.query-handler';

@QueryHandler(SomethingQuery)
export class SomethingQueryHandler extends TemplateQueryHandler<SomethingQuery> {
  async execute(query: SomethingQuery): Promise<void> {
    const { } = query;
  }
}
