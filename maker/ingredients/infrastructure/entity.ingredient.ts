import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class EntityIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/shared/infrastructure/modules/database/entities`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.entity.ts`;
  }

  getImports(): any {
    return {
      '{ Entity }': 'typeorm',
      '{ TemplateEntity }': '@core/templates/_template.entity',
    };
  }

  getDecorators(): any {
    return {
      Entity: [
        () => {
          return { name: this.snakeName() };
        },
      ],
    };
  }

  getClassName(): string {
    return `${this.pascalName()}Entity`;
  }

  getClassExtends(): string {
    return 'TemplateEntity';
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
