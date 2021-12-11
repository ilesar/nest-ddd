import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class DtoIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/shared/infrastructure/modules/graphql/dtos`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.dto.ts`;
  }

  getImports(): any {
    return {
      '{ TemplateDto }': '@core/templates/_template.dto',
      '{ Dto }': '@core/decorators/dto.decorator',
    };
  }

  getDecorators(): any {
    return {
      Dto: `${this.pascalName()}Dto`,
    };
  }

  getClassName(): string {
    return `${this.pascalName()}Dto`;
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
