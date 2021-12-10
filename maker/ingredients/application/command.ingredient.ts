import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class CommandIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/commands`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.command.ts`;
  }

  getImports(): any {
    return {
      '{ TemplateCommand }': '@core/templates/_template.command',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string {
    return `${this.pascalName()}Command`;
  }

  getClassExtends(): string {
    return 'TemplateCommand';
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

  hasConstructor = true;

  getMethods(): any[] {
    return [];
  }
}
