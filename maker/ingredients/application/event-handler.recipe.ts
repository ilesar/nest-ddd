import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.event-handler.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ EventsHandler }',
    moduleSpecifier: '@nestjs/cqrs',
  },
  {
    defaultImport: '{ CreateSomethingEvent }',
    moduleSpecifier: './create-something.event',
  },
  {
    defaultImport: '{ TemplateEventHandler }',
    moduleSpecifier: '@core/templates/_template.event-handler',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingEventHandler',
  extends: 'TemplateEventHandler<CreateSomethingEvent>',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'EventsHandler',
  arguments: ['CreateSomethingEvent'],
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super();');

const method = classDeclaration.addMethod({
  name: 'execute',
  isAsync: true,
  returnType: 'Promise<void>',
  parameters: [
    {
      name: 'event',
      type: 'CreateSomethingEvent',
    },
  ],
});

method.addStatements('const {} = event;');

sourceFile.saveSync();
