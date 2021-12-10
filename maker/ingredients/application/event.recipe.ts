import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.event.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclaration({
  defaultImport: '{ TemplateEvent }',
  moduleSpecifier: '@core/templates/_template.event',
});

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingEvent',
  extends: 'TemplateEvent',
  isExported: true,
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super({});');
sourceFile.saveSync();
