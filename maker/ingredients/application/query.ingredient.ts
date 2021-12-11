import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class QueryIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/queries`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.query.ts`;
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
    return `${this.pascalName()}Query`;
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
