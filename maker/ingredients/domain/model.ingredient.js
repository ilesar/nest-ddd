"use strict";
exports.__esModule = true;
exports.ModelIngredient = void 0;
var ModelIngredient = /** @class */ (function () {
    function ModelIngredient() {
        this.hasConstructor = false;
    }
    ModelIngredient.prototype.getFilePath = function () {
        return 'something.model.ts';
    };
    ModelIngredient.prototype.getImports = function () {
        return {
            '{ TemplateModel }': '@core/templates/_template.model'
        };
    };
    ModelIngredient.prototype.getDecorators = function () {
        return [];
    };
    ModelIngredient.prototype.getClassName = function () {
        return 'Something';
    };
    ModelIngredient.prototype.getClassExtends = function () {
        return 'TemplateModel';
    };
    ModelIngredient.prototype.getInterfaceName = function () {
        return;
    };
    ModelIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    ModelIngredient.prototype.getMethods = function () {
        return [];
    };
    return ModelIngredient;
}());
exports.ModelIngredient = ModelIngredient;
