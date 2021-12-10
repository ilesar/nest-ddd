import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.command.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclaration({
  defaultImport: '{ TemplateCommand }',
  moduleSpecifier: '@core/templates/_template.command',
});

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingCommand',
  extends: 'TemplateCommand',
  isExported: true,
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super({});');
sourceFile.saveSync();
