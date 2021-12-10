import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class ModelIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something.model.ts';
  }

  getImports(): any {
    return {
      '{ TemplateModel }': '@core/templates/_template.model',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string {
    return 'Something';
  }

  getClassExtends(): string {
    return 'TemplateModel';
  }

  getInterfaceName(): string | undefined {
    return;
  }

  getInterfaceExtends(): string[] | undefined {
    return;
  }

  hasConstructor = false;

  getMethods(): any[] {
    return [];
  }
}
