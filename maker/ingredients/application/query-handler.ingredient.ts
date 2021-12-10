import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class QueryHandlerIngredient implements IngredientInterface {
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
