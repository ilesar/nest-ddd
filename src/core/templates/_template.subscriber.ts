import { TemplateCommand } from '@core/templates/_template.command';

export abstract class TemplateSubscriber extends TemplateCommand {
  protected constructor(parameters?: { [key: string]: any }, silent?: boolean) {
    super(parameters, silent);
    this.logger.warn(`[SUBSCRIBER TRIGGERED] ${this.constructor.name}`);
  }
}
