import { IndentationText, Project, QuoteKind } from 'ts-morph';
import { IngredientInterface } from '../interfaces/ingredient.interface';
import { File } from './file.builder';

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

    file.createSource(ingredient.getFilePath());
    file.addImports(ingredient.getImports());

    if (ingredient.getClassName()) {
      file.addClass(
        ingredient.getClassName(),
        ingredient.getClassExtends(),
        ingredient.getClassImplements(),
      );

      file.addDecorators(ingredient.getDecorators());

      if (ingredient.hasConstructor) {
        file.addConstructor();
      }

      file.addMethods(ingredient.getMethods());
    }

    if (ingredient.getInterfaceName()) {
      if (ingredient.getClassName()) {
        throw new Error(
          'Ingredient has to be either for class or interface. Not both.',
        );
      }

      file.addInterface(
        ingredient.getInterfaceName(),
        ingredient.getInterfaceExtends(),
      );
    }

    file.save();
  }
}
