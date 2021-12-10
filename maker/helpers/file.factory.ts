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
    file.addClass(ingredient.getClassName(), ingredient.getClassExtends());
    file.addDecorators(ingredient.getDecorators());
    file.addConstructor();
    file.addMethods(ingredient.getMethods());

    file.save();
  }
}
