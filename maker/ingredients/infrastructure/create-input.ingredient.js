"use strict";
exports.__esModule = true;
exports.CreateInputIngredient = void 0;
var CreateInputIngredient = /** @class */ (function () {
    function CreateInputIngredient() {
        this.hasConstructor = false;
    }
    CreateInputIngredient.prototype.getFilePath = function () {
        return 'create-something.input.ts';
    };
    CreateInputIngredient.prototype.getImports = function () {
        return {
            '{ InputType, PickType }': '@nestjs/graphql',
            '{ SomethingInput }': './something.input'
        };
    };
    CreateInputIngredient.prototype.getDecorators = function () {
        return {
            'InputType()': null
        };
    };
    CreateInputIngredient.prototype.getClassName = function () {
        return 'CreateSomethingInput';
    };
    CreateInputIngredient.prototype.getClassExtends = function () {
        return "PickType(SomethingInput, [] as const)";
    };
    CreateInputIngredient.prototype.getInterfaceName = function () {
        return;
    };
    CreateInputIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    CreateInputIngredient.prototype.getMethods = function () {
        return [];
    };
    return CreateInputIngredient;
}());
exports.CreateInputIngredient = CreateInputIngredient;
