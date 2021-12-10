import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class DtoIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something.dto.ts';
  }

  getImports(): any {
    return {
      '{ TemplateDto }': '@core/templates/_template.dto',
      '{ Dto }': '@core/decorators/dto.decorator',
    };
  }

  getDecorators(): any {
    return {
      Dto: 'SomethingDto',
    };
  }

  getClassName(): string {
    return 'SomethingDto';
  }

  getClassExtends(): string {
    return 'TemplateDto';
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
