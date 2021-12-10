import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class SubscriberHandlerIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something.subscriber-handler.ts';
  }

  getImports(): any {
    return {
      '{ SubscriberHandler }': '@core/decorators/subscriber-handler.decorator',
      '{ SomethingSubscriber }': './something.subscriber',
      '{ TemplateSubscriberHandler }':
        '@core/templates/_template.subscriber-handler',
    };
  }

  getDecorators(): any {
    return { SubscriberHandler: ['SomethingSubscriber'] };
  }

  getClassName(): string {
    return 'SomethingSubscriberHandler';
  }

  getClassExtends(): string {
    return 'TemplateSubscriberHandler<SomethingSubscriber>';
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
              type: 'SomethingSubscriber',
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
