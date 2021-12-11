import { MakerService } from './services/maker.service';
import { RecipeName } from './enums/maker-command.enum';
import { CommandWithHandlerRecipe } from './recipes/command-with-handler.recipe';
import { QueryWithHandlerRecipe } from './recipes/query-with-handler.recipe';
import { SubscriberWithHandlerRecipe } from './recipes/subscriber-with-handler.recipe';
import { EventWithHandlerRecipe } from './recipes/event-with-handler.recipe';
import { RecipeInterface } from './interfaces/recipe.interface';
import { TestRecipe } from './recipes/test.recipe';
import { EntityRecipe } from './recipes/entity.recipe';
import * as chalk from 'chalk';

(async () => {
  let recipe: RecipeInterface;
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
      recipe = new TestRecipe();
      break;
    case RecipeName.Entity:
      recipe = new EntityRecipe();
      break;
    case RecipeName.Command:
      maker.setName(await maker.getCommandName());
      recipe = new CommandWithHandlerRecipe();
      break;
    case RecipeName.Query:
      maker.setName(await maker.getCommandName());
      recipe = new QueryWithHandlerRecipe();
      break;
    case RecipeName.Subscriber:
      maker.setName(await maker.getCommandName());
      recipe = new SubscriberWithHandlerRecipe();
      break;
    case RecipeName.Event:
      maker.setName(await maker.getCommandName());
      recipe = new EventWithHandlerRecipe();
      break;
    default:
      throw new Error('Unknown maker command');
  }

  console.log('--------------------------------');
  maker.bindToContext(boundedContextName);
  maker.executeRecipe(recipe);
})();
