import { TemplateCommand } from '@core/templates/_template.command';

export abstract class TemplateQuery extends TemplateCommand {
  protected constructor(parameters?: { [key: string]: any }, silent?: boolean) {
    super(parameters, silent);
    this.logger.warn(`[QUERY TRIGGERED] ${this.constructor.name}`);
  }
}
