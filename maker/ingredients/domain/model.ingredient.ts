import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something.model.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ TemplateModel }',
    moduleSpecifier: '@core/templates/_template.model',
  },
]);

sourceFile.addClass({
  name: 'Something',
  extends: 'TemplateModel',
  isExported: true,
});

sourceFile.saveSync();
