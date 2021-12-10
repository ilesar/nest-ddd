"use strict";
exports.__esModule = true;
exports.SubscriberHandlerIngredient = void 0;
var SubscriberHandlerIngredient = /** @class */ (function () {
    function SubscriberHandlerIngredient() {
        this.hasConstructor = false;
    }
    SubscriberHandlerIngredient.prototype.getFilePath = function () {
        return 'something.subscriber-handler.ts';
    };
    SubscriberHandlerIngredient.prototype.getImports = function () {
        return {
            '{ SubscriberHandler }': '@core/decorators/subscriber-handler.decorator',
            '{ SomethingSubscriber }': './something.subscriber',
            '{ TemplateSubscriberHandler }': '@core/templates/_template.subscriber-handler'
        };
    };
    SubscriberHandlerIngredient.prototype.getDecorators = function () {
        return { SubscriberHandler: ['SomethingSubscriber'] };
    };
    SubscriberHandlerIngredient.prototype.getClassName = function () {
        return 'SomethingSubscriberHandler';
    };
    SubscriberHandlerIngredient.prototype.getClassExtends = function () {
        return 'TemplateSubscriberHandler<SomethingSubscriber>';
    };
    SubscriberHandlerIngredient.prototype.getMethods = function () {
        return [
            {
                header: {
                    name: 'execute',
                    isAsync: true,
                    returnType: 'Promise<void>',
                    parameters: [
                        {
                            name: 'subscriber',
                            type: 'SomethingSubscriber'
                        },
                    ]
                },
                body: {
                    statements: ['const {} = subscriber;']
                }
            },
        ];
    };
    return SubscriberHandlerIngredient;
}());
exports.SubscriberHandlerIngredient = SubscriberHandlerIngredient;
