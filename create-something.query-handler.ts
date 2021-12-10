import { QueryHandler } from '@nestjs/cqrs';
import { CreateSomethingQuery } from './create-something.query';
import { TemplateQueryHandler } from '@core/templates/_template.query-handler';

@QueryHandler(CreateSomethingQuery)
export class CreateSomethingQueryHandler extends TemplateQueryHandler<CreateSomethingQuery> {
  constructor() {
    super();
  }

  async execute(query: CreateSomethingQuery): Promise<void> {
    const {} = query;
  }
}
