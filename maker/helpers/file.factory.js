"use strict";
exports.__esModule = true;
exports.FileFactory = void 0;
var ts_morph_1 = require("ts-morph");
var file_builder_1 = require("./file.builder");
var FileFactory = /** @class */ (function () {
    function FileFactory() {
        this.project = new ts_morph_1.Project({
            tsConfigFilePath: 'tsconfig.json',
            manipulationSettings: {
                quoteKind: ts_morph_1.QuoteKind.Single,
                indentationText: ts_morph_1.IndentationText.TwoSpaces
            }
        });
    }
    FileFactory.prototype.createFileFromIngredient = function (ingredient) {
        var file = new file_builder_1.File(this.project);
        file.createSource(ingredient.getFilePath());
        file.addImports(ingredient.getImports());
        file.addClass(ingredient.getClassName(), ingredient.getClassExtends());
        file.addDecorators(ingredient.getDecorators());
        if (ingredient.hasConstructor) {
            file.addConstructor();
        }
        file.addMethods(ingredient.getMethods());
        file.save();
    };
    return FileFactory;
}());
exports.FileFactory = FileFactory;