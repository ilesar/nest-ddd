import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class EventIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'create-something.event.ts';
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
    return 'CreateSomethingEvent';
  }

  getClassExtends(): string {
    return 'TemplateEvent';
  }

  hasConstructor = true;

  getMethods(): any[] {
    return [];
  }
}
