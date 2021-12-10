import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.query-handler.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ QueryHandler }',
    moduleSpecifier: '@nestjs/cqrs',
  },
  {
    defaultImport: '{ CreateSomethingQuery }',
    moduleSpecifier: './create-something.query',
  },
  {
    defaultImport: '{ TemplateQueryHandler }',
    moduleSpecifier: '@core/templates/_template.query-handler',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingQueryHandler',
  extends: 'TemplateQueryHandler<CreateSomethingQuery>',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'QueryHandler',
  arguments: ['CreateSomethingQuery'],
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super();');

const method = classDeclaration.addMethod({
  name: 'execute',
  isAsync: true,
  returnType: 'Promise<void>',
  parameters: [
    {
      name: 'query',
      type: 'CreateSomethingQuery',
    },
  ],
});

method.addStatements('const {} = query;');

sourceFile.saveSync();
