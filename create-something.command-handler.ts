import { CommandHandler } from '@nestjs/cqrs';
import { CreateSomethingCommand } from './create-something.command';
import { TemplateCommandHandler } from '@core/templates/_template.command-handler';

@CommandHandler(CreateSomethingCommand)
export class CreateSomethingCommandHandler extends TemplateCommandHandler<CreateSomethingCommand> {
  constructor() {
    super();
  }

  async execute(command: CreateSomethingCommand): Promise<void> {
    const {} = command;
  }
}
