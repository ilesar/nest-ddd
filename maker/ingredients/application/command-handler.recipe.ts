import { IndentationText, Project, QuoteKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
  },
});
const sourceFile = project.createSourceFile(
  'create-something.command-handler.ts',
  {},
  { overwrite: true },
);

sourceFile.addImportDeclarations([
  {
    defaultImport: '{ CommandHandler }',
    moduleSpecifier: '@nestjs/cqrs',
  },
  {
    defaultImport: '{ CreateSomethingCommand }',
    moduleSpecifier: './create-something.command',
  },
  {
    defaultImport: '{ TemplateCommandHandler }',
    moduleSpecifier: '@core/templates/_template.command-handler',
  },
]);

const classDeclaration = sourceFile.addClass({
  name: 'CreateSomethingCommandHandler',
  extends: 'TemplateCommandHandler<CreateSomethingCommand>',
  isExported: true,
});

classDeclaration.addDecorator({
  name: 'CommandHandler',
  arguments: ['CreateSomethingCommand'],
});

const ctor = classDeclaration.addConstructor({});
ctor.addStatements('super();');

const method = classDeclaration.addMethod({
  name: 'execute',
  isAsync: true,
  returnType: 'Promise<void>',
  parameters: [
    {
      name: 'command',
      type: 'CreateSomethingCommand',
    },
  ],
});

method.addStatements('const {} = command;');

sourceFile.saveSync();
