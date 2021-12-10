import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.query.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclaration({
  defaultImport: '{ TemplateQuery }',
  moduleSpecifier: '@core/templates/_template.query',
});

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingQuery',
  extends: 'TemplateQuery',
  isExported: true,
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super({});');
sourceFile.saveSync();
