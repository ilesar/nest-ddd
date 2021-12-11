import { CommandIngredient } from '../ingredients/application/command.ingredient';
import { RecipeInterface } from '../interfaces/recipe.interface';
import { CommandHandlerIngredient } from '../ingredients/application/command-handler.ingredient';
import { BaseRecipe } from './base.recipe';
import { AddCommandToApplicationLayerConnection } from '../connections/add-command-to-application-layer.connection';

export class CommandWithHandlerRecipe
  extends BaseRecipe
  implements RecipeInterface
{
  execute(): void {
    this.fileFactory.createFileFromIngredient(
      new CommandIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new CommandHandlerIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.updateFilesFromConnection(
      new AddCommandToApplicationLayerConnection(
        this.name,
        this.boundedContext,
      ),
    );
  }
}
