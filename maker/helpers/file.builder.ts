import { Project } from 'ts-morph';

export class File {
  private project: Project;

  private source: any;

  private classDeclaration: any;

  private ctor: any;

  constructor(project: Project) {
    this.project = project;
  }

  createSource(filePath: string) {
    this.source = this.project.createSourceFile(
      filePath,
      {},
      { overwrite: true },
    );
  }

  addImports(importDefinitions: any[]) {
    const importDeclarations = Object.fromEntries(
      Object.entries(importDefinitions).map(([importName, importPath]) =>
        this.createImportChunk(importName, importPath),
      ),
    );

    this.source.addImportDeclarations(importDeclarations);
  }

  addClass(name: string, extendsParam?: any) {
    this.classDeclaration = this.source.addClass({
      name: name,
      extends: extendsParam,
      isExported: true,
    });
  }

  addDecorators(decoratorDefinitions: any[]) {
    const decoratorDeclarations = Object.fromEntries(
      Object.entries(decoratorDefinitions).map(
        ([decoratorName, decoratorArguments]) =>
          this.createDecoratorChunk(decoratorName, decoratorArguments),
      ),
    );

    this.classDeclaration.addDecorators(decoratorDeclarations);
  }

  addConstructor() {
    this.ctor = this.classDeclaration.addConstructor({});
    this.ctor.addStatements('super();');
  }

  addMethods(methodDefinitions: any[]) {
    this.classDeclaration.addMethods(methodDefinitions);
  }

  private createImportChunk(importName: string, importPath: string): any {
    return {
      defaultImport: importName,
      moduleSpecifier: importPath,
    };
  }

  private createDecoratorChunk(
    decoratorName: string,
    decoratorArguments: any[],
  ): any {
    return {
      name: decoratorName,
      arguments: decoratorArguments,
    };
  }

  save() {
    this.source.formatText();
    this.source.saveSync();
  }
}
