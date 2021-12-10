"use strict";
exports.__esModule = true;
exports.EventIngredient = void 0;
var EventIngredient = /** @class */ (function () {
    function EventIngredient() {
        this.hasConstructor = true;
    }
    EventIngredient.prototype.getFilePath = function () {
        return 'create-something.event.ts';
    };
    EventIngredient.prototype.getImports = function () {
        return {
            '{ TemplateEvent }': '@core/templates/_template.event'
        };
    };
    EventIngredient.prototype.getDecorators = function () {
        return [];
    };
    EventIngredient.prototype.getClassName = function () {
        return 'CreateSomethingEvent';
    };
    EventIngredient.prototype.getClassExtends = function () {
        return 'TemplateEvent';
    };
    EventIngredient.prototype.getMethods = function () {
        return [];
    };
    return EventIngredient;
}());
exports.EventIngredient = EventIngredient;
