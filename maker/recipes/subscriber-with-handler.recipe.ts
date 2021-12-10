import { RecipeInterface } from '../interfaces/recipe.interface';
import { FileFactory } from '../helpers/file.factory';
import { SubscriberIngredient } from '../ingredients/application/subscriber.ingredient';
import { SubscriberHandlerIngredient } from '../ingredients/application/subscriber-handler.ingredient';

export class SubscriberWithHandlerRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory): void {
    fileFactory.createFileFromIngredient(new SubscriberIngredient());
    fileFactory.createFileFromIngredient(new SubscriberHandlerIngredient());
  }
}
