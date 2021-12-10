import { IngredientInterface } from '../interfaces/ingredient.interface';
import { BaseIngredient } from './base.ingredient';

export class DtoIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  getFilePath(): string {
    return 'domain.layer.ts';
  }

  getImports(): any {
    return {
      '{ domainConfig }': './domain.config.ts',
      '{ Domain }': '@core/decorators/domain.decorator',
    };
  }

  getDecorators(): any {
    return {
      Domain: 'domainConfig',
    };
  }

  getClassName(): string {
    return 'DomainLayer';
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
