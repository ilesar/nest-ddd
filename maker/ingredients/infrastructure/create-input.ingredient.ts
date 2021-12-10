import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class CreateInputIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'create-something.input.ts';
  }

  getImports(): any {
    return {
      '{ InputType, PickType }': '@nestjs/graphql',
      '{ SomethingInput }': './something.input',
    };
  }

  getDecorators(): any {
    return {
      'InputType()': null,
    };
  }

  getClassName(): string {
    return 'CreateSomethingInput';
  }

  getClassExtends(): string {
    return `PickType(SomethingInput, [] as const)`;
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
