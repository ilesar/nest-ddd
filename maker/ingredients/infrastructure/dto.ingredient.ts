import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something.dto.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ TemplateDto }',
    moduleSpecifier: '@core/templates/_template.dto',
  },
  {
    defaultImport: '{ Dto }',
    moduleSpecifier: '@core/decorators/dto.decorator',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'SomethingDto',
  extends: 'TemplateDto',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'Dto',
  arguments: ['SomethingDto'],
});

sourceFile.saveSync();
