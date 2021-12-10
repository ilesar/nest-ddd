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
var model_ingredient_1 = require("../ingredients/domain/model.ingredient");
var service_ingredient_1 = require("../ingredients/domain/service.ingredient");
var repository_interface_ingredient_1 = require("../ingredients/domain/repository-interface.ingredient");
var dto_ingredient_1 = require("../ingredients/infrastructure/dto.ingredient");
var input_ingredient_1 = require("../ingredients/infrastructure/input.ingredient");
var create_input_ingredient_1 = require("../ingredients/infrastructure/create-input.ingredient");
var update_input_ingredient_1 = require("../ingredients/infrastructure/update-input.ingredient");
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
        fileFactory.createFileFromIngredient(new model_ingredient_1.ModelIngredient());
        fileFactory.createFileFromIngredient(new service_ingredient_1.ServiceIngredient());
        fileFactory.createFileFromIngredient(new repository_interface_ingredient_1.RepositoryInterfaceIngredient());
        fileFactory.createFileFromIngredient(new dto_ingredient_1.DtoIngredient());
        fileFactory.createFileFromIngredient(new input_ingredient_1.InputIngredient());
        fileFactory.createFileFromIngredient(new create_input_ingredient_1.CreateInputIngredient());
        fileFactory.createFileFromIngredient(new update_input_ingredient_1.UpdateInputIngredient());
    };
    return TestRecipe;
}());
exports.TestRecipe = TestRecipe;
