"use strict";
exports.__esModule = true;
exports.ServiceIngredient = void 0;
var ServiceIngredient = /** @class */ (function () {
    function ServiceIngredient() {
        this.hasConstructor = true;
    }
    ServiceIngredient.prototype.getFilePath = function () {
        return 'something-management.service.ts';
    };
    ServiceIngredient.prototype.getImports = function () {
        return {
            '{ Injectable }': '@nestjs/common'
        };
    };
    ServiceIngredient.prototype.getDecorators = function () {
        return {
            'Injectable()': null
        };
    };
    ServiceIngredient.prototype.getClassName = function () {
        return 'SomethingManagementService';
    };
    ServiceIngredient.prototype.getClassExtends = function () {
        return;
    };
    ServiceIngredient.prototype.getInterfaceName = function () {
        return;
    };
    ServiceIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    ServiceIngredient.prototype.getMethods = function () {
        return [];
    };
    return ServiceIngredient;
}());
exports.ServiceIngredient = ServiceIngredient;
