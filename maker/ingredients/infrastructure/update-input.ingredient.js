"use strict";
exports.__esModule = true;
exports.UpdateInputIngredient = void 0;
var UpdateInputIngredient = /** @class */ (function () {
    function UpdateInputIngredient() {
        this.hasConstructor = false;
    }
    UpdateInputIngredient.prototype.getFilePath = function () {
        return 'update-something.input.ts';
    };
    UpdateInputIngredient.prototype.getImports = function () {
        var _a;
        return _a = {},
            _a["{ \n  InputType,\n  PartialType,\n  IntersectionType,\n  PickType,\n}"] = '@nestjs/graphql',
            _a['{ CreateSomethingInput }'] = './create-something.input',
            _a['{ TemplateDto }'] = '@core/templates/_template.dto',
            _a;
    };
    UpdateInputIngredient.prototype.getDecorators = function () {
        return {
            'InputType()': null
        };
    };
    UpdateInputIngredient.prototype.getClassName = function () {
        return 'UpdateSomethingInput';
    };
    UpdateInputIngredient.prototype.getClassExtends = function () {
        return "IntersectionType(\nPickType(TemplateDto, ['id'] as const),\nPartialType(\n  PickType(CreateSomethingInput, [\n    /* updateable properties here */\n  ] as const),\n),\n)";
    };
    UpdateInputIngredient.prototype.getInterfaceName = function () {
        return;
    };
    UpdateInputIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    UpdateInputIngredient.prototype.getMethods = function () {
        return [];
    };
    return UpdateInputIngredient;
}());
exports.UpdateInputIngredient = UpdateInputIngredient;
