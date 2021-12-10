"use strict";
exports.__esModule = true;
exports.RepositoryInterfaceIngredient = void 0;
var RepositoryInterfaceIngredient = /** @class */ (function () {
    function RepositoryInterfaceIngredient() {
        this.hasConstructor = true;
    }
    RepositoryInterfaceIngredient.prototype.getFilePath = function () {
        return 'something-repository.interface.ts';
    };
    RepositoryInterfaceIngredient.prototype.getImports = function () {
        return {
            '{ Something }': './something.model',
            '{ RepositoryInterface }': '@core/interfaces/repository.interface'
        };
    };
    RepositoryInterfaceIngredient.prototype.getDecorators = function () {
        return [];
    };
    RepositoryInterfaceIngredient.prototype.getClassName = function () {
        return;
    };
    RepositoryInterfaceIngredient.prototype.getClassExtends = function () {
        return;
    };
    RepositoryInterfaceIngredient.prototype.getInterfaceName = function () {
        return 'SomethingRepositoryInterface';
    };
    RepositoryInterfaceIngredient.prototype.getInterfaceExtends = function () {
        return ['RepositoryInterface<Something>'];
    };
    RepositoryInterfaceIngredient.prototype.getMethods = function () {
        return [];
    };
    return RepositoryInterfaceIngredient;
}());
exports.RepositoryInterfaceIngredient = RepositoryInterfaceIngredient;
