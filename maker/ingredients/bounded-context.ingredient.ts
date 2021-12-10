import { IngredientInterface } from '../interfaces/ingredient.interface';
import { BaseIngredient } from './base.ingredient';

export class DtoIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  getFilePath(): string {
    return 'something.bounded-context.ts';
  }

  getImports(): any {
    return {
      '{ InfrastructureLayer }': './infrastructure.layer.ts',
      '{ BoundedContext }': '@core/decorators/bounded-context.decorator',
    };
  }

  getDecorators(): any {
    return {
      BoundedContext: 'InfrastructureLayer',
    };
  }

  getClassName(): string {
    return 'SomethingBoundedContext';
  }

  getClassExtends(): string | undefined {
    return;
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
