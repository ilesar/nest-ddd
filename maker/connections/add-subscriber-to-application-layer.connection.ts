import { BaseConnection } from './base.connection';
import { ConnectionInterface } from '../interfaces/connection.interface';
import { PropertyAssignment, SyntaxKind } from 'ts-morph';

export class AddSubscriberToApplicationLayerConnection
  extends BaseConnection
  implements ConnectionInterface
{
  wireUp(): void {
    const configFile = this.project.getSourceFile(
      `src/${this.boundedContext}/application/application.config.ts`,
    );

    configFile.addImportDeclarations([
      {
        defaultImport: `{ ${this.pascalName()}SubscriberHandler }`,
        moduleSpecifier: `@${
          this.boundedContext
        }/application/handlers/subscriber/${this.kebabName()}.subscriber-handler`,
      },
    ]);
    const queryHandlersConfig = configFile
      .getVariableDeclarationOrThrow('applicationConfig')
      .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      .getPropertyOrThrow('subscriberHandlers') as PropertyAssignment;

    const queryHandlersConfigValue =
      queryHandlersConfig.getInitializerIfKindOrThrow(
        SyntaxKind.ArrayLiteralExpression,
      );

    queryHandlersConfigValue.addElement(
      `${this.pascalName()}SubscriberHandler`,
    );

    configFile.saveSync();
  }
}
