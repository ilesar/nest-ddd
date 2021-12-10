"use strict";
exports.__esModule = true;
exports.QueryIngredient = void 0;
var QueryIngredient = /** @class */ (function () {
    function QueryIngredient() {
        this.hasConstructor = true;
    }
    QueryIngredient.prototype.getFilePath = function () {
        return 'something.query.ts';
    };
    QueryIngredient.prototype.getImports = function () {
        return {
            '{ TemplateQuery }': '@core/templates/_template.query'
        };
    };
    QueryIngredient.prototype.getDecorators = function () {
        return [];
    };
    QueryIngredient.prototype.getClassName = function () {
        return 'SomethingQuery';
    };
    QueryIngredient.prototype.getClassExtends = function () {
        return 'TemplateQuery';
    };
    QueryIngredient.prototype.getInterfaceName = function () {
        return;
    };
    QueryIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    QueryIngredient.prototype.getMethods = function () {
        return [];
    };
    return QueryIngredient;
}());
exports.QueryIngredient = QueryIngredient;
