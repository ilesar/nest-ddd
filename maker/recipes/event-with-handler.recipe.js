"use strict";
exports.__esModule = true;
exports.EventWithHandlerRecipe = void 0;
var event_ingredient_1 = require("../ingredients/application/event.ingredient");
var EventWithHandlerRecipe = /** @class */ (function () {
    function EventWithHandlerRecipe() {
    }
    EventWithHandlerRecipe.prototype.execute = function (fileFactory) {
        fileFactory.createFileFromIngredient(new event_ingredient_1.EventIngredient());
    };
    return EventWithHandlerRecipe;
}());
exports.EventWithHandlerRecipe = EventWithHandlerRecipe;
