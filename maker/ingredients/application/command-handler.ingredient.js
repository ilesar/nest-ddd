"use strict";
exports.__esModule = true;
exports.CommandHandlerIngredient = void 0;
var CommandHandlerIngredient = /** @class */ (function () {
    function CommandHandlerIngredient() {
        this.hasConstructor = false;
    }
    CommandHandlerIngredient.prototype.getFilePath = function () {
        return 'create-something.command-handler.ts';
    };
    CommandHandlerIngredient.prototype.getImports = function () {
        return {
            '{ CommandHandler }': '@nestjs/cqrs',
            '{ CreateSomethingCommand }': './create-something.command',
            '{ TemplateCommandHandler }': '@core/templates/_template.command-handler'
        };
    };
    CommandHandlerIngredient.prototype.getDecorators = function () {
        return { CommandHandler: ['CreateSomethingCommand'] };
    };
    CommandHandlerIngredient.prototype.getClassName = function () {
        return 'CreateSomethingCommandHandler';
    };
    CommandHandlerIngredient.prototype.getClassExtends = function () {
        return 'TemplateCommandHandler<CreateSomethingCommand>';
    };
    CommandHandlerIngredient.prototype.getInterfaceName = function () {
        return;
    };
    CommandHandlerIngredient.prototype.getInterfaceExtends = function () {
        return;
    };
    CommandHandlerIngredient.prototype.getMethods = function () {
        return [
            {
                header: {
                    name: 'execute',
                    isAsync: true,
                    returnType: 'Promise<void>',
                    parameters: [
                        {
                            name: 'command',
                            type: 'CreateSomethingCommand'
                        },
                    ]
                },
                body: {
                    statements: ['const {} = command;']
                }
            },
        ];
    };
    return CommandHandlerIngredient;
}());
exports.CommandHandlerIngredient = CommandHandlerIngredient;
