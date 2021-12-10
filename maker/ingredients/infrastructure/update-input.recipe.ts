import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'update-something.input.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: `{ 
  InputType,
  PartialType,
  IntersectionType,
  PickType
}`,
    moduleSpecifier: '@nestjs/graphql',
  },
  {
    defaultImport: '{ CreateSomethingInput }',
    moduleSpecifier: './create-something.input',
  },
  {
    defaultImport: '{ TemplateDto }',
    moduleSpecifier: '@core/templates/_template.dto',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'UpdateSomethingInput',
  extends: `IntersectionType(
PickType(TemplateDto, ['id'] as const),
PartialType(
  PickType(CreateSomethingInput, [
    /* updateable properties here */
  ] as const),
),
)`,
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'InputType()',
});

sourceFile.formatText();

sourceFile.saveSync();
