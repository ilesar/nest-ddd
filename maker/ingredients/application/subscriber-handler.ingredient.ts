import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class SubscriberHandlerIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/handlers/subscriber`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.subscriber-handler.ts`;
  }

  getImports(): any {
    return {
      '{ SubscriberHandler }': '@core/decorators/subscriber-handler.decorator',
      [`{ ${this.pascalName()}Subscriber }`]: `./../../subscribers/${this.kebabName()}.subscriber`,
      '{ TemplateSubscriberHandler }':
        '@core/templates/_template.subscriber-handler',
    };
  }

  getDecorators(): any {
    return { SubscriberHandler: [`${this.pascalName()}Subscriber`] };
  }

  getClassName(): string {
    return `${this.pascalName()}SubscriberHandler`;
  }

  getClassExtends(): string {
    return `TemplateSubscriberHandler<${this.pascalName()}Subscriber>`;
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
    return [
      {
        header: {
          name: 'execute',
          isAsync: true,
          returnType: 'Promise<void>',
          parameters: [
            {
              name: 'subscriber',
              type: `${this.pascalName()}Subscriber`,
            },
          ],
        },
        body: {
          statements: ['const {} = subscriber;'],
        },
      },
    ];
  }
}
