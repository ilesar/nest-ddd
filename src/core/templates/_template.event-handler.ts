import { TemplateCommandHandler } from '@core/templates/_template.command-handler';
import { TemplateEvent } from '@core/templates/_template.event';

export abstract class TemplateEventHandler<
  P extends TemplateEvent,
> extends TemplateCommandHandler<P> {}
