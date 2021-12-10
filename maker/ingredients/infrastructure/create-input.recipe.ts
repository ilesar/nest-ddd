import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
    useTrailingCommas: true,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.input.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ InputType, OmitType }',
    moduleSpecifier: '@nestjs/graphql',
  },
  {
    defaultImport: '{ SomethingInput }',
    moduleSpecifier: './something.input',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingInput',
  extends: `OmitType(SomethingInput, [
    'id',
    'createdAt',
    'updatedAt',
  ] as const)`,
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
