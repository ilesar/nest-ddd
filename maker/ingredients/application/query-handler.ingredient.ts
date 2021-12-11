import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class QueryHandlerIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  private readonly LOCATION = `src/${this.boundedContext}/application/handlers/query`;

  getFilePath(): string {
    return `${this.LOCATION}/${this.kebabName()}.query-handler.ts`;
  }

  getImports(): any {
    return {
      '{ QueryHandler }': '@nestjs/cqrs',
      [`{ ${this.pascalName()}Query }`]: `./../../queries/${this.kebabName()}.query`,
      '{ TemplateQueryHandler }': '@core/templates/_template.query-handler',
    };
  }

  getDecorators(): any {
    return { QueryHandler: [`${this.pascalName()}Query`] };
  }

  getClassName(): string {
    return `${this.pascalName()}QueryHandler`;
  }

  getClassExtends(): string {
    return `TemplateQueryHandler<${this.pascalName()}Query>`;
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
              name: 'query',
              type: `${this.pascalName()}Query`,
            },
          ],
        },
        body: {
          statements: ['const {} = query;'],
        },
      },
    ];
  }
}
