"use strict";
exports.__esModule = true;
exports.TestRecipe = void 0;
var command_ingredient_1 = require("../ingredients/application/command.ingredient");
var command_handler_ingredient_1 = require("../ingredients/application/command-handler.ingredient");
var event_ingredient_1 = require("../ingredients/application/event.ingredient");
var query_ingredient_1 = require("../ingredients/application/query.ingredient");
var subscriber_ingredient_1 = require("../ingredients/application/subscriber.ingredient");
var query_handler_ingredient_1 = require("../ingredients/application/query-handler.ingredient");
var subscriber_handler_ingredient_1 = require("../ingredients/application/subscriber-handler.ingredient");
var event_handler_ingredient_1 = require("../ingredients/application/event-handler.ingredient");
var TestRecipe = /** @class */ (function () {
    function TestRecipe() {
    }
    TestRecipe.prototype.execute = function (fileFactory) {
        fileFactory.createFileFromIngredient(new command_ingredient_1.CommandIngredient());
        fileFactory.createFileFromIngredient(new command_handler_ingredient_1.CommandHandlerIngredient());
        fileFactory.createFileFromIngredient(new query_ingredient_1.QueryIngredient());
        fileFactory.createFileFromIngredient(new query_handler_ingredient_1.QueryHandlerIngredient());
        fileFactory.createFileFromIngredient(new subscriber_ingredient_1.SubscriberIngredient());
        fileFactory.createFileFromIngredient(new subscriber_handler_ingredient_1.SubscriberHandlerIngredient());
        fileFactory.createFileFromIngredient(new event_ingredient_1.EventIngredient());
        fileFactory.createFileFromIngredient(new event_handler_ingredient_1.EventHandlerIngredient());
    };
    return TestRecipe;
}());
exports.TestRecipe = TestRecipe;
