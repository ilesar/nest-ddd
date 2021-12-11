import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class UpdateInputIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/shared/infrastructure/modules/graphql/inputs/update`;

  getFilePath(): string {
    return `${this.LOCATION}/update-${this.kebabName()}.input.ts`;
  }

  getImports(): any {
    return {
      [`{ 
  InputType,
  PartialType,
  IntersectionType,
  PickType,
}`]: '@nestjs/graphql',
      [`{ Create${this.pascalName()}Input }`]: `./create-${this.kebabName()}.input`,
      '{ TemplateDto }': '@core/templates/_template.dto',
    };
  }

  getDecorators(): any {
    return {
      'InputType()': null,
    };
  }

  getClassName(): string {
    return `Update${this.pascalName()}Input`;
  }

  getClassExtends(): string {
    return `IntersectionType(
PickType(TemplateDto, ['id'] as const),
PartialType(
  PickType(Create${this.pascalName()}Input, [
    /* updateable properties here */
  ] as const),
),
)`;
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
