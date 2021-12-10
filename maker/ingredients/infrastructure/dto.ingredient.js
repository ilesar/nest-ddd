"use strict";
exports.__esModule = true;
exports.DtoIngredient = void 0;
var DtoIngredient = /** @class */ (function () {
    function DtoIngredient() {
        this.hasConstructor = false;
    }
    DtoIngredient.prototype.getFilePath = function () {
        return 'something.dto.ts';
    };
    DtoIngredient.prototype.getImports = function () {
        return {
            '{ TemplateDto }': '@core/templates/_template.dto',
            '{ Dto }': '@core/decorators/dto.decorator'
        };
    };
    DtoIngredient.prototype.getDecorators = function () {
        return {
            Dto: 'SomethingDto'
        };
    };
    DtoIngredient.prototype.getClassName = function () {
        return 'SomethingDto';
    };
    DtoIngredient.prototype.getClassExtends = function () {
        return 'TemplateDto';
    };
    DtoIngredient.prototype.getInterfaceName = function () {
        return;
    };
    DtoIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    DtoIngredient.prototype.getMethods = function () {
        return [];
    };
    return DtoIngredient;
}());
exports.DtoIngredient = DtoIngredient;
