"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var maker_service_1 = require("./services/maker.service");
var maker_command_enum_1 = require("./enums/maker-command.enum");
var command_with_handler_recipe_1 = require("./recipes/command-with-handler.recipe");
var query_with_handler_recipe_1 = require("./recipes/query-with-handler.recipe");
var subscriber_with_handler_recipe_1 = require("./recipes/subscriber-with-handler.recipe");
var event_with_handler_recipe_1 = require("./recipes/event-with-handler.recipe");
var test_recipe_1 = require("./recipes/test.recipe");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var recipe, maker, commandName;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                maker = new maker_service_1.MakerService();
                return [4 /*yield*/, maker.getCommandName()];
            case 1:
                commandName = _a.sent();
                switch (commandName) {
                    case maker_command_enum_1.MakerCommand.Test:
                        recipe = new test_recipe_1.TestRecipe();
                        break;
                    case maker_command_enum_1.MakerCommand.Command:
                        recipe = new command_with_handler_recipe_1.CommandWithHandlerRecipe();
                        break;
                    case maker_command_enum_1.MakerCommand.Query:
                        recipe = new query_with_handler_recipe_1.QueryWithHandlerRecipe();
                        break;
                    case maker_command_enum_1.MakerCommand.Subscriber:
                        recipe = new subscriber_with_handler_recipe_1.SubscriberWithHandlerRecipe();
                        break;
                    case maker_command_enum_1.MakerCommand.Event:
                        recipe = new event_with_handler_recipe_1.EventWithHandlerRecipe();
                        break;
                    default:
                        throw new Error('Unknown maker command');
                }
                maker.executeRecipe(recipe);
                return [2 /*return*/];
        }
    });
}); })();
