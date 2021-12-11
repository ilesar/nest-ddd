import { RecipeInterface } from '../interfaces/recipe.interface';
import { SubscriberIngredient } from '../ingredients/application/subscriber.ingredient';
import { SubscriberHandlerIngredient } from '../ingredients/application/subscriber-handler.ingredient';
import { BaseRecipe } from './base.recipe';

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
  }
}
