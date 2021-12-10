import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { BaseIngredient } from '../base.ingredient';

export class QueryHandlerIngredient
  extends BaseIngredient
  implements IngredientInterface
{
  getFilePath(): string {
    return 'something.query-handler.ts';
  }

  getImports(): any {
    return {
      '{ QueryHandler }': '@nestjs/cqrs',
      '{ SomethingQuery }': './something.query',
      '{ TemplateQueryHandler }': '@core/templates/_template.query-handler',
    };
  }

  getDecorators(): any {
    return { QueryHandler: ['SomethingQuery'] };
  }

  getClassName(): string {
    return 'SomethingQueryHandler';
  }

  getClassExtends(): string {
    return 'TemplateQueryHandler<SomethingQuery>';
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
              type: 'SomethingQuery',
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
