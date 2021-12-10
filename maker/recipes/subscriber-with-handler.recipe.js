"use strict";
exports.__esModule = true;
exports.SubscriberWithHandlerRecipe = void 0;
var subscriber_ingredient_1 = require("../ingredients/application/subscriber.ingredient");
var SubscriberWithHandlerRecipe = /** @class */ (function () {
    function SubscriberWithHandlerRecipe() {
    }
    SubscriberWithHandlerRecipe.prototype.execute = function (fileFactory) {
        fileFactory.createFileFromIngredient(new subscriber_ingredient_1.SubscriberIngredient());
    };
    return SubscriberWithHandlerRecipe;
}());
exports.SubscriberWithHandlerRecipe = SubscriberWithHandlerRecipe;
