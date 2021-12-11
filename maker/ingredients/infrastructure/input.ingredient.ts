import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class InputIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/shared/infrastructure/modules/graphql/inputs/base`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.input.ts`;
  }

  getImports(): any {
    return {
      '{ InputType, PickType }': '@nestjs/graphql',
      '{ SomethingDto }': `./../../dtos/${this.kebabName()}.dto`,
    };
  }

  getDecorators(): any {
    return {
      InputType: [
        () => {
          return { isAbstract: true };
        },
      ],
    };
  }

  getClassName(): string {
    return `${this.pascalName()}Input`;
  }

  getClassExtends(): string {
    return `PickType(${this.pascalName()}Dto, [
  'id',
  'createdAt',
  'updatedAt',
] as const)`;
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
