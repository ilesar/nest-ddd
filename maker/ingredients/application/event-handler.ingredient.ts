import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class EventHandlerIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'create-something.event-handler.ts';
  }

  getImports(): any {
    return {
      '{ EventsHandler }': '@nestjs/cqrs',
      '{ CreateSomethingEvent }': './create-something.event',
      '{ TemplateEventHandler }': '@core/templates/_template.event-handler',
    };
  }

  getDecorators(): any {
    return { EventsHandler: ['CreateSomethingEvent'] };
  }

  getClassName(): string {
    return 'CreateSomethingEventHandler';
  }

  getClassExtends(): string {
    return 'TemplateEventHandler<CreateSomethingEvent>';
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
              name: 'event',
              type: 'CreateSomethingEvent',
            },
          ],
        },
        body: {
          statements: ['const {} = event;'],
        },
      },
    ];
  }
}
