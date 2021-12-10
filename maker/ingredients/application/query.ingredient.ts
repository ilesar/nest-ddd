import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class QueryIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  getFilePath(): string {
    return 'something.query.ts';
  }

  getImports(): any {
    return {
      '{ TemplateQuery }': '@core/templates/_template.query',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string {
    return 'SomethingQuery';
  }

  getClassExtends(): string {
    return 'TemplateQuery';
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
