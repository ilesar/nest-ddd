import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.subscriber.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclaration({
  defaultImport: '{ TemplateSubscriber }',
  moduleSpecifier: '@core/templates/_template.subscriber',
});

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingSubscriber',
  extends: 'TemplateSubscriber',
  isExported: true,
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super({});');
sourceFile.saveSync();
