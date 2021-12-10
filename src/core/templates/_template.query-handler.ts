import { TemplateCommandHandler } from '@core/templates/_template.command-handler';
import { TemplateQuery } from '@core/templates/_template.query';

export abstract class TemplateQueryHandler<
  P extends TemplateQuery,
> extends TemplateCommandHandler<P> {}
