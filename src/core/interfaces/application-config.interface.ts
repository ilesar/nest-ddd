import { CronExpression } from '@nestjs/schedule';
import { TemplateCommand } from '@core/templates/_template.command';

export interface ApplicationConfigInterface {
  modules: any[];
  processes?: {
    interval: CronExpression;
    command: { new (): TemplateCommand };
  }[];
  commandHandlers: any[];
  queryHandlers: any[];
  eventHandlers: any[];
  repositories: any[];
  validators: any[];
  services: any[];
  subscriberHandlers: any[];
  providers?: any[];
}
