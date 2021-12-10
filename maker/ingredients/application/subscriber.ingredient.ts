import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class SubscriberIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something.subscriber.ts';
  }

  getImports(): any {
    return {
      '{ TemplateSubscriber }': '@core/templates/_template.subscriber',
    };
  }

  getDecorators(): any {
    return [];
  }

  getClassName(): string {
    return 'SomethingSubscriber';
  }

  getClassExtends(): string {
    return 'TemplateSubscriber';
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
