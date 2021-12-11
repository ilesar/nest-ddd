import { RecipeInterface } from '../interfaces/recipe.interface';
import { EventIngredient } from '../ingredients/application/event.ingredient';
import { EventHandlerIngredient } from '../ingredients/application/event-handler.ingredient';
import { BaseRecipe } from './base.recipe';
import { AddEventToApplicationLayerConnection } from '../connections/add-event-to-application-layer.connection';

export class EventWithHandlerRecipe
  extends BaseRecipe
  implements RecipeInterface
{
  execute(): void {
    this.fileFactory.createFileFromIngredient(
      new EventIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new EventHandlerIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.updateFilesFromConnection(
      new AddEventToApplicationLayerConnection(this.name, this.boundedContext),
    );
  }
}
