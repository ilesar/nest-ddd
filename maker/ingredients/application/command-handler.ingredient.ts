import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class CommandHandlerIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/handlers/command`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.command-handler.ts`;
  }

  getImports(): any {
    return {
      '{ CommandHandler }': '@nestjs/cqrs',
      [`{ ${this.pascalName()}Command }`]: `./../../commands/${this.kebabName()}.command`,
      '{ TemplateCommandHandler }': '@core/templates/_template.command-handler',
    };
  }

  getDecorators(): any {
    return { CommandHandler: [`${this.pascalName()}Command`] };
  }

  getClassName(): string {
    return `${this.pascalName()}CommandHandler`;
  }

  getClassExtends(): string {
    return `TemplateCommandHandler<${this.pascalName()}Command>`;
  }

  getClassImplements(): string[] | undefined {
    return;
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
              type: `${this.pascalName()}Command`,
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
