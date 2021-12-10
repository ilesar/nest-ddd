import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class CommandIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'create-something.command.ts';
  }

  getImports(): any {
    return {
      '{ TemplateCommand }': '@core/templates/_template.command',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string {
    return 'CreateSomethingCommand';
  }

  getClassExtends(): string {
    return 'TemplateCommand';
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

  hasConstructor = true;

  getMethods(): any[] {
    return [];
  }
}
