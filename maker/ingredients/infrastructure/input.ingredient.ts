import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class InputIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  getFilePath(): string {
    return 'something.input.ts';
  }

  getImports(): any {
    return {
      '{ InputType, PickType }': '@nestjs/graphql',
      '{ SomethingDto }': './something.dto',
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
    return 'SomethingInput';
  }

  getClassExtends(): string {
    return `PickType(SomethingDto, [
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
