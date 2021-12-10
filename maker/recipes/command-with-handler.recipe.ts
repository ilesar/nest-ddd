import { FileFactory } from '../helpers/file.factory';
import { CommandIngredient } from '../ingredients/application/command.ingredient';
import { RecipeInterface } from '../interfaces/recipe.interface';
import { CommandHandlerIngredient } from '../ingredients/application/command-handler.ingredient';

export class CommandWithHandlerRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory): void {
    fileFactory.createFileFromIngredient(new CommandIngredient());
    fileFactory.createFileFromIngredient(new CommandHandlerIngredient());
  }
}
