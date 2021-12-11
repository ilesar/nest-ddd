import { RecipeInterface } from '../interfaces/recipe.interface';
import { FileFactory } from '../helpers/file.factory';
import { EventIngredient } from '../ingredients/application/event.ingredient';
import { EventHandlerIngredient } from '../ingredients/application/event-handler.ingredient';

export class EventWithHandlerRecipe implements RecipeInterface {
  execute(
    fileFactory: FileFactory,
    name: string,
    boundedContext: string,
  ): void {
    fileFactory.createFileFromIngredient(
      new EventIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new EventHandlerIngredient(name, boundedContext),
    );
  }
}
