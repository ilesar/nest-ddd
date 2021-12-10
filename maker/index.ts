import { MakerService } from './services/maker.service';
import { RecipeInterface } from './interfaces/recipe.interface';
import { MakerCommand } from './enums/maker-command.enum';
import { CommandWithHandlerRecipe } from './recipes/command-with-handler.recipe';
import { QueryWithHandlerRecipe } from './recipes/query-with-handler.recipe';
import { SubscriberWithHandlerRecipe } from './recipes/subscriber-with-handler.recipe';
import { EventWithHandlerRecipe } from './recipes/event-with-handler.recipe';

(async () => {
  const maker = new MakerService();

  const commandName = await maker.getCommandName();

  let recipe: RecipeInterface;

  switch (commandName) {
    case MakerCommand.Command:
      recipe = new CommandWithHandlerRecipe();
      break;
    case MakerCommand.Query:
      recipe = new QueryWithHandlerRecipe();
      break;
    case MakerCommand.Subscriber:
      recipe = new SubscriberWithHandlerRecipe();
      break;
    case MakerCommand.Event:
      recipe = new EventWithHandlerRecipe();
      break;
    default:
      throw new Error('Unknown maker command');
  }

  recipe.execute();
})();
