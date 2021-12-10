import { FileFactory } from '../helpers/file.factory';
import { CommandIngredient } from '../ingredients/application/command.ingredient';
import { RecipeInterface } from '../interfaces/recipe.interface';
import { CommandHandlerIngredient } from '../ingredients/application/command-handler.ingredient';

export class CommandWithHandlerRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory, boundedContext: string): void {
    fileFactory.createFileFromIngredient(
      new CommandIngredient('create something', boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new CommandHandlerIngredient('create something', boundedContext),
    );
  }
}
