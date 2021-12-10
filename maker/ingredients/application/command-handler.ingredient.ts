import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class CommandHandlerIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'create-something.command-handler.ts';
  }

  getImports(): any {
    return {
      '{ CommandHandler }': '@nestjs/cqrs',
      '{ CreateSomethingCommand }': './create-something.command',
      '{ TemplateCommandHandler }': '@core/templates/_template.command-handler',
    };
  }

  getDecorators(): any {
    return { CommandHandler: ['CreateSomethingCommand'] };
  }

  getClassName(): string {
    return 'CreateSomethingCommandHandler';
  }

  getClassExtends(): string {
    return 'TemplateCommandHandler<CreateSomethingCommand>';
  }

  getInterfaceName(): string | undefined {
    return;
  }

  getInterfaceExtends(): string[] | undefined {
    return;
  }

  hasConstructor = false;

  getMethods(): any[] {
    return [
      {
        header: {
          name: 'execute',
          isAsync: true,
          returnType: 'Promise<void>',
          parameters: [
            {
              name: 'command',
              type: 'CreateSomethingCommand',
            },
          ],
        },
        body: {
          statements: ['const {} = command;'],
        },
      },
    ];
  }
}
