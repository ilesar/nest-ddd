import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'something.repository.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ EntityRepository }',
    moduleSpecifier: 'typeorm',
  },
  {
    defaultImport: '{ SomethingEntity }',
    moduleSpecifier: './something.entity',
  },
  {
    defaultImport: '{ SomethingRepositoryInterface }',
    moduleSpecifier: './something-repository.interface',
  },
  {
    defaultImport: '{ TemplateRepository }',
    moduleSpecifier: '@core/templates/_template.repository',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'SomethingTypeormRepository',
  extends: 'TemplateRepository<SomethingEntity>',
  implements: ['SomethingRepositoryInterface'],
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'EntityRepository',
  arguments: ['SomethingEntity'],
});

sourceFile.formatText();

sourceFile.saveSync();
