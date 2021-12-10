import { Project } from 'ts-morph';

export class File {
  private project: Project;

  private source: any;

  private classDeclaration: any;

  private interfaceDeclaration: any;

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
    const importDeclarations = Object.entries(importDefinitions).map(
      ([importName, importPath]) => {
        return this.createImportChunk(importName, importPath);
      },
    );

    this.source.addImportDeclarations(importDeclarations);
  }

  addClass(name: string, extendsParam?: any, implementsParams?: any[]) {
    this.classDeclaration = this.source.addClass({
      name: name,
      extends: extendsParam,
      implements: implementsParams,
      isExported: true,
    });
  }

  addInterface(name: string, extendsParams?: string[]) {
    this.interfaceDeclaration = this.source.addInterface({
      name: name,
      extends: extendsParams,
      isExported: true,
    });
  }

  addDecorators(decoratorDefinitions: any[]) {
    if (decoratorDefinitions.length === 0) {
      return;
    }

    const decoratorDeclarations = Object.entries(decoratorDefinitions).map(
      ([decoratorName, decoratorArguments]) =>
        this.createDecoratorChunk(decoratorName, decoratorArguments),
    );

    this.classDeclaration.addDecorators(decoratorDeclarations);
  }

  addConstructor() {
    this.ctor = this.classDeclaration.addConstructor({});

    if (!!this.classDeclaration.getBaseClass()) {
      this.ctor.addStatements('super({});');
    }
  }

  addMethods(methodDefinitions: any[]) {
    for (const methodDefinition of methodDefinitions) {
      const method = this.classDeclaration.addMethod(methodDefinition.header);
      method.addStatements(methodDefinition.body.statements);
    }
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
