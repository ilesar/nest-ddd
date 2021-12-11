import { IndentationText, Project, QuoteKind } from 'ts-morph';
import { IngredientInterface } from '../interfaces/ingredient.interface';
import { File } from './file.builder';
import * as chalk from 'chalk';

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
    const file = new File(this.project);

    console.log(`Creating ${chalk.bold(ingredient.getClassName())}...`);
    file.createSource(ingredient.getFilePath());
    console.log(chalk.grey(`Adding imports...`));
    file.addImports(ingredient.getImports());

    if (ingredient.getClassName()) {
      console.log(chalk.grey(`Creating class...`));
      file.addClass(
        ingredient.getClassName(),
        ingredient.getClassExtends(),
        ingredient.getClassImplements(),
      );

      console.log(chalk.grey(`Adding decorators...`));
      file.addDecorators(ingredient.getDecorators());

      if (ingredient.hasConstructor) {
        console.log(chalk.grey(`Adding constructor...`));
        file.addConstructor();
      }

      console.log(chalk.grey(`Adding class methods...`));
      file.addMethods(ingredient.getMethods());
    }

    if (ingredient.getInterfaceName()) {
      if (ingredient.getClassName()) {
        throw new Error(
          'Ingredient has to be either for class or interface. Not both.',
        );
      }

      console.log(chalk.grey(`Adding interface...`));
      file.addInterface(
        ingredient.getInterfaceName(),
        ingredient.getInterfaceExtends(),
      );
    }

    console.log(chalk.grey(`Saving file...`));
    file.save();
  }
}
