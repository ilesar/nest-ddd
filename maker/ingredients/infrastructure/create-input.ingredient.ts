import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class CreateInputIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/shared/infrastructure/modules/graphql/inputs/create`;

  getFilePath(): string {
    return `${this.LOCATION}/create-${this.kebabName()}.input.ts`;
  }

  getImports(): any {
    return {
      '{ InputType, PickType }': '@nestjs/graphql',
      [`{ ${this.pascalName()}Input }`]: `./base/${this.kebabName()}.input }`,
    };
  }

  getDecorators(): any {
    return {
      'InputType()': null,
    };
  }

  getClassName(): string {
    return `Create${this.pascalName()}Input`;
  }

  getClassExtends(): string {
    return `PickType(${this.pascalName()}Input, [] as const)`;
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
