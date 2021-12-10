import { TemplateCommandHandler } from '@core/templates/_template.command-handler';
import { TemplateSubscriber } from '@core/templates/_template.subscriber';

export abstract class TemplateSubscriberHandler<
  P extends TemplateSubscriber,
> extends TemplateCommandHandler<P> {}
