import { BaseConnection } from './base.connection';
import { ConnectionInterface } from '../interfaces/connection.interface';
import { PropertyAssignment, SyntaxKind } from 'ts-morph';

export class AddCommandToApplicationLayerConnection
  extends BaseConnection
  implements ConnectionInterface
{
  wireUp(): void {
    const configFile = this.project.getSourceFile(
      `src/${this.boundedContext}/application/application.config.ts`,
    );

    configFile.addImportDeclarations([
      {
        defaultImport: `{ ${this.pascalName()}CommandHandler }`,
        moduleSpecifier: `@${
          this.boundedContext
        }/application/handlers/command/${this.kebabName()}.command-handler`,
      },
    ]);
    const queryHandlersConfig = configFile
      .getVariableDeclarationOrThrow('applicationConfig')
      .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      .getPropertyOrThrow('commandHandlers') as PropertyAssignment;

    const queryHandlersConfigValue =
      queryHandlersConfig.getInitializerIfKindOrThrow(
        SyntaxKind.ArrayLiteralExpression,
      );

    queryHandlersConfigValue.addElement(`${this.pascalName()}CommandHandler`);

    configFile.saveSync();
  }
}
