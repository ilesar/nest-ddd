import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class InputIngredient implements IngredientInterface {
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
