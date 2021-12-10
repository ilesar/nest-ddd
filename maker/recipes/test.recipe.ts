import { FileFactory } from '../helpers/file.factory';
import { CommandIngredient } from '../ingredients/application/command.ingredient';
import { RecipeInterface } from '../interfaces/recipe.interface';
import { CommandHandlerIngredient } from '../ingredients/application/command-handler.ingredient';
import { EventIngredient } from '../ingredients/application/event.ingredient';
import { QueryIngredient } from '../ingredients/application/query.ingredient';
import { SubscriberIngredient } from '../ingredients/application/subscriber.ingredient';
import { QueryHandlerIngredient } from '../ingredients/application/query-handler.ingredient';
import { SubscriberHandlerIngredient } from '../ingredients/application/subscriber-handler.ingredient';
import { EventHandlerIngredient } from '../ingredients/application/event-handler.ingredient';

export class TestRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory): void {
    fileFactory.createFileFromIngredient(new CommandIngredient());
    fileFactory.createFileFromIngredient(new CommandHandlerIngredient());
    fileFactory.createFileFromIngredient(new QueryIngredient());
    fileFactory.createFileFromIngredient(new QueryHandlerIngredient());
    fileFactory.createFileFromIngredient(new SubscriberIngredient());
    fileFactory.createFileFromIngredient(new SubscriberHandlerIngredient());
    fileFactory.createFileFromIngredient(new EventIngredient());
    fileFactory.createFileFromIngredient(new EventHandlerIngredient());
  }
}
