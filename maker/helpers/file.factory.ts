import { IndentationText, Project, QuoteKind } from 'ts-morph';
import { IngredientInterface } from '../interfaces/ingredient.interface';
import { FileBuilder } from './file.builder';
import * as chalk from 'chalk';
import { ConnectionInterface } from '../interfaces/connection.interface';
import { camelCase, upperFirst } from 'lodash';

export class FileFactory {
  private readonly project: Project;

  constructor() {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
      manipulationSettings: {
        quoteKind: QuoteKind.Single,
        indentationText: IndentationText.TwoSpaces,
      },
    });
  }

  createFileFromIngredient(ingredient: IngredientInterface) {
    const fileBuilder = new FileBuilder(this.project);

    console.log(`Creating ${chalk.whiteBright(ingredient.getClassName())}...`);
    fileBuilder.createSource(ingredient.getFilePath());
    console.log(chalk.grey(`Adding imports...`));
    fileBuilder.addImports(ingredient.getImports());

    if (ingredient.getClassName()) {
      console.log(chalk.grey(`Creating class...`));
      fileBuilder.addClass(
        ingredient.getClassName(),
        ingredient.getClassExtends(),
        ingredient.getClassImplements(),
      );

      console.log(chalk.grey(`Adding decorators...`));
      fileBuilder.addDecorators(ingredient.getDecorators());

      if (ingredient.hasConstructor) {
        console.log(chalk.grey(`Adding constructor...`));
        fileBuilder.addConstructor();
      }

      console.log(chalk.grey(`Adding class methods...`));
      fileBuilder.addMethods(ingredient.getMethods());
    }

    if (ingredient.getInterfaceName()) {
      if (ingredient.getClassName()) {
        throw new Error(
          'Ingredient has to be either for class or interface. Not both.',
        );
      }

      console.log(chalk.grey(`Adding interface...`));
      fileBuilder.addInterface(
        ingredient.getInterfaceName(),
        ingredient.getInterfaceExtends(),
      );
    }

    console.log(chalk.grey(`Saving file...`));
    fileBuilder.save();
    console.log(chalk.grey(`Ingredient added successfully!`));
  }

  updateFilesFromConnection(connection: ConnectionInterface) {
    console.log(
      `Applying ${chalk.whiteBright(
        upperFirst(camelCase(connection.constructor.name)),
      )}...`,
    );
    console.log(chalk.grey(`Binding connection to project...`));
    connection.bindProject(this.project);
    console.log(chalk.grey(`Wiring up connection...`));
    connection.wireUp();
  }
}
