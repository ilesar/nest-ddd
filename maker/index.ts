import { MakerService } from './services/maker.service';
import { RecipeName } from './enums/maker-command.enum';
import { CommandWithHandlerRecipe } from './recipes/command-with-handler.recipe';
import { QueryWithHandlerRecipe } from './recipes/query-with-handler.recipe';
import { SubscriberWithHandlerRecipe } from './recipes/subscriber-with-handler.recipe';
import { EventWithHandlerRecipe } from './recipes/event-with-handler.recipe';
import { TestRecipe } from './recipes/test.recipe';
import { EntityWithApiRecipe } from './recipes/entity-with-api.recipe';
import { FileFactory } from './helpers/file.factory';

(async () => {
  let recipeClass;
  const maker = new MakerService();

  console.log(`
██████  ███████      ██ ███████ 
██   ██ ██           ██ ██      
██████  █████        ██ ███████ 
██   ██ ██      ██   ██      ██ 
██████  ██       █████  ███████`);
  console.log('Code Generator');
  console.log('--------------------------------');

  const recipeName = await maker.getRecipeName();
  const boundedContextName = await maker.getBoundedContext();

  switch (recipeName) {
    case RecipeName.Test:
      recipeClass = TestRecipe;
      break;
    case RecipeName.Entity:
      recipeClass = EntityWithApiRecipe;
      break;
    case RecipeName.Command:
      recipeClass = CommandWithHandlerRecipe;
      break;
    case RecipeName.Query:
      recipeClass = QueryWithHandlerRecipe;
      break;
    case RecipeName.Subscriber:
      recipeClass = SubscriberWithHandlerRecipe;
      break;
    case RecipeName.Event:
      recipeClass = EventWithHandlerRecipe;
      break;
    default:
      throw new Error('Unknown maker command');
  }

  const name = await maker.getCommandName();

  const recipe = new recipeClass(boundedContextName);
  recipe.setName(name);

  console.log('--------------------------------');
  console.log('Setting up...');
  maker.bindToContext(boundedContextName);
  await maker.executeRecipe(recipe);
})();
