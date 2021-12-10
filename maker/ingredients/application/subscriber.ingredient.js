"use strict";
exports.__esModule = true;
exports.SubscriberIngredient = void 0;
var SubscriberIngredient = /** @class */ (function () {
    function SubscriberIngredient() {
        this.hasConstructor = true;
    }
    SubscriberIngredient.prototype.getFilePath = function () {
        return 'something.subscriber.ts';
    };
    SubscriberIngredient.prototype.getImports = function () {
        return {
            '{ TemplateSubscriber }': '@core/templates/_template.subscriber'
        };
    };
    SubscriberIngredient.prototype.getDecorators = function () {
        return [];
    };
    SubscriberIngredient.prototype.getClassName = function () {
        return 'SomethingSubscriber';
    };
    SubscriberIngredient.prototype.getClassExtends = function () {
        return 'TemplateSubscriber';
    };
    SubscriberIngredient.prototype.getMethods = function () {
        return [];
    };
    return SubscriberIngredient;
}());
exports.SubscriberIngredient = SubscriberIngredient;
