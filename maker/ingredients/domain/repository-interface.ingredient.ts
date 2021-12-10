import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class RepositoryInterfaceIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  getFilePath(): string {
    return 'something-repository.interface.ts';
  }

  getImports(): any {
    return {
      '{ Something }': './something.model',
      '{ RepositoryInterface }': '@core/interfaces/repository.interface',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string | undefined {
    return;
  }

  getClassExtends(): string | undefined {
    return;
  }

  getClassImplements(): string[] | undefined {
    return;
  }

  getInterfaceName(): string | undefined {
    return 'SomethingRepositoryInterface';
  }

  getInterfaceExtends(): string[] | undefined {
    return ['RepositoryInterface<Something>'];
  }

  hasConstructor = true;

  getMethods(): any[] {
    return [];
  }
}
