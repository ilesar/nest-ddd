import { RecipeInterface } from '../interfaces/recipe.interface';
import { SubscriberIngredient } from '../ingredients/application/subscriber.ingredient';
import { SubscriberHandlerIngredient } from '../ingredients/application/subscriber-handler.ingredient';
import { BaseRecipe } from './base.recipe';
import { AddSubscriberToApplicationLayerConnection } from '../connections/add-subscriber-to-application-layer.connection';

export class SubscriberWithHandlerRecipe
  extends BaseRecipe
  implements RecipeInterface
{
  execute(): void {
    this.fileFactory.createFileFromIngredient(
      new SubscriberIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new SubscriberHandlerIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.updateFilesFromConnection(
      new AddSubscriberToApplicationLayerConnection(
        this.name,
        this.boundedContext,
      ),
    );
  }
}
