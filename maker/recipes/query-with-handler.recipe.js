"use strict";
exports.__esModule = true;
exports.QueryWithHandlerRecipe = void 0;
var query_ingredient_1 = require("../ingredients/application/query.ingredient");
var QueryWithHandlerRecipe = /** @class */ (function () {
    function QueryWithHandlerRecipe() {
    }
    QueryWithHandlerRecipe.prototype.execute = function (fileFactory) {
        fileFactory.createFileFromIngredient(new query_ingredient_1.QueryIngredient());
    };
    return QueryWithHandlerRecipe;
}());
exports.QueryWithHandlerRecipe = QueryWithHandlerRecipe;
