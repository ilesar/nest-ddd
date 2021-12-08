import { Logger } from '@nestjs/common';

export abstract class TemplateProcess {
  private readonly logger = new Logger(this.constructor.name);

  protected constructor() {
    this.logger.warn(`[PROCESS TRIGGERED] ${this.constructor.name}`);
  }
}
