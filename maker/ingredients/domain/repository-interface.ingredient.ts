import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something-repository.interface.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ Something }',
    moduleSpecifier: './something.model',
  },
  {
    defaultImport: '{ RepositoryInterface }',
    moduleSpecifier: '@core/interfaces/repository.interface',
  },
]);

sourceFile.addInterface({
  name: 'SomethingRepositoryInterface',
  extends: ['RepositoryInterface<Something>'],
  isExported: true,
});

sourceFile.saveSync();
