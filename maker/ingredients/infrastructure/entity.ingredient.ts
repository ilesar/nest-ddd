import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something.entity.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ Entity }',
    moduleSpecifier: 'typeorm',
  },
  {
    defaultImport: '{ TemplateEntity }',
    moduleSpecifier: '@core/templates/_template.entity',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'SomethingEntity',
  extends: 'TemplateEntity',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'Entity',
  arguments: [
    () => {
      return { name: 'something' };
    },
  ],
});

sourceFile.saveSync();
