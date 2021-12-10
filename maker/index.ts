import { MakerService } from './services/maker.service';
import { MakerCommand } from './enums/maker-command.enum';
import { CommandWithHandlerRecipe } from './recipes/command-with-handler.recipe';
import { QueryWithHandlerRecipe } from './recipes/query-with-handler.recipe';
import { SubscriberWithHandlerRecipe } from './recipes/subscriber-with-handler.recipe';
import { EventWithHandlerRecipe } from './recipes/event-with-handler.recipe';
import { RecipeInterface } from './interfaces/recipe.interface';
import { TestRecipe } from './recipes/test.recipe';
import { EntityRecipe } from './recipes/entity.recipe';

(async () => {
  let recipe: RecipeInterface;
  const maker = new MakerService();

  const makerCommand = await maker.getMakerCommandName();
  const boundedContextName = await maker.getBoundedContext();

  switch (makerCommand) {
    case MakerCommand.Test:
      recipe = new TestRecipe();
      break;
    case MakerCommand.Entity:
      recipe = new EntityRecipe();
      break;
    case MakerCommand.Command:
      maker.setName(await maker.getCommandName());

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

  maker.bindToContext(boundedContextName);
  maker.executeRecipe(recipe);
})();
