import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something-management.service.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ Injectable }',
    moduleSpecifier: '@nestjs/common',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'SomethingManagementService',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'Injectable()',
});

sourceFile.saveSync();
