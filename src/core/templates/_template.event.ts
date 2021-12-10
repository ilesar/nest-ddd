import { TemplateCommand } from '@core/templates/_template.command';

export abstract class TemplateEvent extends TemplateCommand {
  protected constructor(parameters?: { [key: string]: any }, silent?: boolean) {
    super(parameters, silent);
    this.logger.warn(`[EVENT TRIGGERED] ${this.constructor.name}`);
  }
}
