"use strict";
exports.__esModule = true;
exports.QueryHandlerIngredient = void 0;
var QueryHandlerIngredient = /** @class */ (function () {
    function QueryHandlerIngredient() {
        this.hasConstructor = false;
    }
    QueryHandlerIngredient.prototype.getFilePath = function () {
        return 'something.query-handler.ts';
    };
    QueryHandlerIngredient.prototype.getImports = function () {
        return {
            '{ QueryHandler }': '@nestjs/cqrs',
            '{ SomethingQuery }': './something.query',
            '{ TemplateQueryHandler }': '@core/templates/_template.query-handler'
        };
    };
    QueryHandlerIngredient.prototype.getDecorators = function () {
        return { QueryHandler: ['SomethingQuery'] };
    };
    QueryHandlerIngredient.prototype.getClassName = function () {
        return 'SomethingQueryHandler';
    };
    QueryHandlerIngredient.prototype.getClassExtends = function () {
        return 'TemplateQueryHandler<SomethingQuery>';
    };
    QueryHandlerIngredient.prototype.getMethods = function () {
        return [
            {
                header: {
                    name: 'execute',
                    isAsync: true,
                    returnType: 'Promise<void>',
                    parameters: [
                        {
                            name: 'query',
                            type: 'SomethingQuery'
                        },
                    ]
                },
                body: {
                    statements: ['const {} = query;']
                }
            },
        ];
    };
    return QueryHandlerIngredient;
}());
exports.QueryHandlerIngredient = QueryHandlerIngredient;
