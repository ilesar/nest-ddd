import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class ModelIngredient
  extends BaseIngredient
  implements IngredientInterface
{
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
    return [];
  }
}
