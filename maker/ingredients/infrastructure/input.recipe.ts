import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something.input.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ InputType, PickType }',
    moduleSpecifier: '@nestjs/graphql',
  },
  {
    defaultImport: '{ SomethingDto }',
    moduleSpecifier: './something.dto',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'SomethingInput',
  extends: `PickType(SomethingDto, [] as const)`,
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'InputType',
  arguments: [
    () => {
      return { isAbstract: true };
    },
  ],
});

sourceFile.saveSync();
