"use strict";
exports.__esModule = true;
exports.File = void 0;
var File = /** @class */ (function () {
    function File(project) {
        this.project = project;
    }
    File.prototype.createSource = function (filePath) {
        this.source = this.project.createSourceFile(filePath, {}, { overwrite: true });
    };
    File.prototype.addImports = function (importDefinitions) {
        var _this = this;
        var importDeclarations = Object.entries(importDefinitions).map(function (_a) {
            var importName = _a[0], importPath = _a[1];
            return _this.createImportChunk(importName, importPath);
        });
        this.source.addImportDeclarations(importDeclarations);
    };
    File.prototype.addClass = function (name, extendsParam) {
        this.classDeclaration = this.source.addClass({
            name: name,
            "extends": extendsParam,
            isExported: true
        });
    };
    File.prototype.addDecorators = function (decoratorDefinitions) {
        var _this = this;
        var decoratorDeclarations = Object.entries(decoratorDefinitions).map(function (_a) {
            var decoratorName = _a[0], decoratorArguments = _a[1];
            return _this.createDecoratorChunk(decoratorName, decoratorArguments);
        });
        this.classDeclaration.addDecorators(decoratorDeclarations);
    };
    File.prototype.addConstructor = function () {
        this.ctor = this.classDeclaration.addConstructor({});
        this.ctor.addStatements('super({});');
    };
    File.prototype.addMethods = function (methodDefinitions) {
        for (var _i = 0, methodDefinitions_1 = methodDefinitions; _i < methodDefinitions_1.length; _i++) {
            var methodDefinition = methodDefinitions_1[_i];
            var method = this.classDeclaration.addMethod(methodDefinition.header);
            method.addStatements(methodDefinition.body.statements);
        }
    };
    File.prototype.createImportChunk = function (importName, importPath) {
        return {
            defaultImport: importName,
            moduleSpecifier: importPath
        };
    };
    File.prototype.createDecoratorChunk = function (decoratorName, decoratorArguments) {
        return {
            name: decoratorName,
            arguments: decoratorArguments
        };
    };
    File.prototype.save = function () {
        this.source.formatText();
        this.source.saveSync();
    };
    return File;
}());
exports.File = File;
