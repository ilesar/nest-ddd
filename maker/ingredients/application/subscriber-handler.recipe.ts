import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.subscriber-handler.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ CreateSomethingSubscriber }',
    moduleSpecifier: './create-something.subscriber',
  },
  {
    defaultImport: '{ TemplateSubscriberHandler }',
    moduleSpecifier: '@core/templates/_template.subscriber-handler',
  },
  {
    defaultImport: '{ SubscriberHandler }',
    moduleSpecifier: '@core/decorators/subscriber-handler.decorator',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingSubscriberHandler',
  extends: 'TemplateSubscriberHandler<CreateSomethingSubscriber>',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'SubscriberHandler',
  arguments: ['CreateSomethingSubscriber'],
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super();');

const method = classDeclaration.addMethod({
  name: 'execute',
  isAsync: true,
  returnType: 'Promise<void>',
  parameters: [
    {
      name: 'subscriber',
      type: 'CreateSomethingSubscriber',
    },
  ],
});

method.addStatements('const {} = subscriber;');

sourceFile.saveSync();
