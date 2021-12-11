import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class ModelIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/shared/domain/models`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.model.ts`;
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
    return `${this.pascalName()}`;
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
