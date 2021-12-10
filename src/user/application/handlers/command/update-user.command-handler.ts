import { CommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../../commands/update-user.command';
import { TemplateCommandHandler } from '@core/templates/_template.command-handler';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler extends TemplateCommandHandler<UpdateUserCommand> {
  constructor() {
    super();
  }

  async execute(command: UpdateUserCommand) {
    const {} = command;
  }
}
