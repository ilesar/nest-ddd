import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class EventHandlerIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/handlers/event`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.event-handler.ts`;
  }

  getImports(): any {
    return {
      '{ EventsHandler }': '@nestjs/cqrs',
      [`{ ${this.pascalName()}Event }`]: `./../../events/${this.kebabName()}.event`,
      '{ TemplateEventHandler }': '@core/templates/_template.event-handler',
    };
  }

  getDecorators(): any {
    return { EventsHandler: [`${this.pascalName()}Event`] };
  }

  getClassName(): string {
    return `${this.pascalName()}EventHandler`;
  }

  getClassExtends(): string {
    return `TemplateEventHandler<${this.pascalName()}Event>`;
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
              type: `${this.pascalName()}Event`,
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
