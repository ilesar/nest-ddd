"use strict";
exports.__esModule = true;
exports.EventHandlerIngredient = void 0;
var EventHandlerIngredient = /** @class */ (function () {
    function EventHandlerIngredient() {
        this.hasConstructor = false;
    }
    EventHandlerIngredient.prototype.getFilePath = function () {
        return 'create-something.event-handler.ts';
    };
    EventHandlerIngredient.prototype.getImports = function () {
        return {
            '{ EventsHandler }': '@nestjs/cqrs',
            '{ CreateSomethingEvent }': './create-something.event',
            '{ TemplateEventHandler }': '@core/templates/_template.event-handler'
        };
    };
    EventHandlerIngredient.prototype.getDecorators = function () {
        return { EventsHandler: ['CreateSomethingEvent'] };
    };
    EventHandlerIngredient.prototype.getClassName = function () {
        return 'CreateSomethingEventHandler';
    };
    EventHandlerIngredient.prototype.getClassExtends = function () {
        return 'TemplateEventHandler<CreateSomethingEvent>';
    };
    EventHandlerIngredient.prototype.getInterfaceName = function () {
        return;
    };
    EventHandlerIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    EventHandlerIngredient.prototype.getMethods = function () {
        return [
            {
                header: {
                    name: 'execute',
                    isAsync: true,
                    returnType: 'Promise<void>',
                    parameters: [
                        {
                            name: 'event',
                            type: 'CreateSomethingEvent'
                        },
                    ]
                },
                body: {
                    statements: ['const {} = event;']
                }
            },
        ];
    };
    return EventHandlerIngredient;
}());
exports.EventHandlerIngredient = EventHandlerIngredient;
