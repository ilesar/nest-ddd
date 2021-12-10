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

  hasConstructor = true;

  getMethods(): any[] {
    return [];
  }
}
