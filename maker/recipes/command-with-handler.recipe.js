"use strict";
exports.__esModule = true;
exports.CommandWithHandlerRecipe = void 0;
var command_ingredient_1 = require("../ingredients/application/command.ingredient");
var command_handler_ingredient_1 = require("../ingredients/application/command-handler.ingredient");
var CommandWithHandlerRecipe = /** @class */ (function () {
    function CommandWithHandlerRecipe() {
    }
    CommandWithHandlerRecipe.prototype.execute = function (fileFactory) {
        fileFactory.createFileFromIngredient(new command_ingredient_1.CommandIngredient());
        fileFactory.createFileFromIngredient(new command_handler_ingredient_1.CommandHandlerIngredient());
    };
    return CommandWithHandlerRecipe;
}());
exports.CommandWithHandlerRecipe = CommandWithHandlerRecipe;
