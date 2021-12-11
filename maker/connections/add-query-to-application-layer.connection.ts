import { BaseConnection } from './base.connection';
import { ConnectionInterface } from '../interfaces/connection.interface';
import { PropertyAssignment, SyntaxKind } from 'ts-morph';

export class AddQueryToApplicationLayerConnection
  extends BaseConnection
  implements ConnectionInterface
{
  wireUp(): void {
    const configFile = this.project.getSourceFile(
      `src/${this.boundedContext}/application/application.config.ts`,
    );

    configFile.addImportDeclarations([
      {
        defaultImport: `{ ${this.pascalName()}QueryHandler }`,
        moduleSpecifier: `@${
          this.boundedContext
        }/application/handlers/query/${this.kebabName()}.query-handler`,
      },
    ]);
    const queryHandlersConfig = configFile
      .getVariableDeclarationOrThrow('applicationConfig')
      .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      .getPropertyOrThrow('queryHandlers') as PropertyAssignment;

    const queryHandlersConfigValue =
      queryHandlersConfig.getInitializerIfKindOrThrow(
        SyntaxKind.ArrayLiteralExpression,
      );

    queryHandlersConfigValue.addElement(`${this.pascalName()}QueryHandler`);

    configFile.saveSync();
  }
}
