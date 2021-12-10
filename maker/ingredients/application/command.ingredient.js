"use strict";
exports.__esModule = true;
exports.CommandIngredient = void 0;
var CommandIngredient = /** @class */ (function () {
    function CommandIngredient() {
        this.hasConstructor = true;
    }
    CommandIngredient.prototype.getFilePath = function () {
        return 'create-something.command.ts';
    };
    CommandIngredient.prototype.getImports = function () {
        return {
            '{ TemplateCommand }': '@core/templates/_template.command'
        };
    };
    CommandIngredient.prototype.getDecorators = function () {
        return [];
    };
    CommandIngredient.prototype.getClassName = function () {
        return 'CreateSomethingCommand';
    };
    CommandIngredient.prototype.getClassExtends = function () {
        return 'TemplateCommand';
    };
    CommandIngredient.prototype.getMethods = function () {
        return [];
    };
    return CommandIngredient;
}());
exports.CommandIngredient = CommandIngredient;
