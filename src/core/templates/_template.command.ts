import { Logger } from '@nestjs/common';

export abstract class TemplateCommand {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(parameters?: { [key: string]: any }, silent?: boolean) {
    if (silent && process.env.SHOW_SILENT_LOGS !== 'true') {
      return;
    }

    this.logCommand(parameters);
  }

  private logCommand(parameters?: { [key: string]: any }) {
    let message = '';

    message = message.concat(`[COMMAND TRIGGERED] ${this.constructor.name}`);

    if (!parameters || Object.keys(parameters).length === 0) {
      this.printMessage(message);
      return;
    }

    for (const argument in parameters) {
      const value = parameters[argument];

      if (!value) {
        continue;
      }

      if (typeof value === 'object' && !Array.isArray(value) && value.id) {
        message = message.concat(
          `\n[${value.constructor.name} ID] ${value.id}`,
        );
        continue;
      }

      message = message.concat(
        `\n[${argument}] ${JSON.stringify(value, null, 2)}`,
      );
    }

    this.printMessage(`${message}\n`);
  }

  private printMessage(message) {
    this.logger.log(message);
  }
}
