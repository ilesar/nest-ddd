import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class SubscriberIngredient
  extends BaseIngredient
  implements IngredientInterface
{
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
