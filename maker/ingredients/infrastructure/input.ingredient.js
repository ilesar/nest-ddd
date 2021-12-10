"use strict";
exports.__esModule = true;
exports.InputIngredient = void 0;
var InputIngredient = /** @class */ (function () {
    function InputIngredient() {
        this.hasConstructor = false;
    }
    InputIngredient.prototype.getFilePath = function () {
        return 'something.input.ts';
    };
    InputIngredient.prototype.getImports = function () {
        return {
            '{ InputType, PickType }': '@nestjs/graphql',
            '{ SomethingDto }': './something.dto'
        };
    };
    InputIngredient.prototype.getDecorators = function () {
        return {
            InputType: [
                function () {
                    return { isAbstract: true };
                },
            ]
        };
    };
    InputIngredient.prototype.getClassName = function () {
        return 'SomethingInput';
    };
    InputIngredient.prototype.getClassExtends = function () {
        return "PickType(SomethingDto, [\n  'id',\n  'createdAt',\n  'updatedAt',\n] as const)";
    };
    InputIngredient.prototype.getInterfaceName = function () {
        return;
    };
    InputIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    InputIngredient.prototype.getMethods = function () {
        return [];
    };
    return InputIngredient;
}());
exports.InputIngredient = InputIngredient;
