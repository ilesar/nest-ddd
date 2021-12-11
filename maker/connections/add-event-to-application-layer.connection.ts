import { BaseConnection } from './base.connection';
import { ConnectionInterface } from '../interfaces/connection.interface';
import { PropertyAssignment, SyntaxKind } from 'ts-morph';

export class AddEventToApplicationLayerConnection
  extends BaseConnection
  implements ConnectionInterface
{
  wireUp(): void {
    const configFile = this.project.getSourceFile(
      `src/${this.boundedContext}/application/application.config.ts`,
    );

    configFile.addImportDeclarations([
      {
        defaultImport: `{ ${this.pascalName()}EventHandler }`,
        moduleSpecifier: `@${
          this.boundedContext
        }/application/handlers/event/${this.kebabName()}.event-handler`,
      },
    ]);
    const queryHandlersConfig = configFile
      .getVariableDeclarationOrThrow('applicationConfig')
      .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      .getPropertyOrThrow('eventHandlers') as PropertyAssignment;

    const queryHandlersConfigValue =
      queryHandlersConfig.getInitializerIfKindOrThrow(
        SyntaxKind.ArrayLiteralExpression,
      );

    queryHandlersConfigValue.addElement(`${this.pascalName()}EventHandler`);

    configFile.saveSync();
  }
}
