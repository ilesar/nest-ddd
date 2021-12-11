import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class EventIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/events`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.event.ts`;
  }

  getImports(): any {
    return {
      '{ TemplateEvent }': '@core/templates/_template.event',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string {
    return `${this.pascalName()}Event`;
  }

  getClassExtends(): string {
    return 'TemplateEvent';
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
