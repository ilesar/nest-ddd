import { MakerService } from './services/maker.service';
import { RecipeName } from './enums/recipe-name.enum';
import { CommandWithHandlerRecipe } from './recipes/command-with-handler.recipe';
import { QueryWithHandlerRecipe } from './recipes/query-with-handler.recipe';
import { SubscriberWithHandlerRecipe } from './recipes/subscriber-with-handler.recipe';
import { EventWithHandlerRecipe } from './recipes/event-with-handler.recipe';
import { EntityWithApiRecipe } from './recipes/entity-with-api.recipe';

const RECIPES = {
  // [RecipeName.CreateBoundedContext]: EntityWithApiRecipe,

  [RecipeName.CreateEntityWithApi]: EntityWithApiRecipe,

  // [RecipeName.CreateGraphQlQuery]: EventWithHandlerRecipe,
  // [RecipeName.CreateGraphQlMutation]: EventWithHandlerRecipe,
  // [RecipeName.CreateGraphQlSubscription]: EventWithHandlerRecipe,

  // [RecipeName.OverrideCreate]: EventWithHandlerRecipe,
  // [RecipeName.OverrideRead]: EventWithHandlerRecipe,
  // [RecipeName.OverrideUpdate]: EventWithHandlerRecipe,
  // [RecipeName.OverrideDelete]: EventWithHandlerRecipe,
  // [RecipeName.OverrideCreateMany]: EventWithHandlerRecipe,
  // [RecipeName.OverrideReadMany]: EventWithHandlerRecipe,
  // [RecipeName.OverrideUpdateMany]: EventWithHandlerRecipe,
  // [RecipeName.OverrideDeleteMany]: EventWithHandlerRecipe,

  [RecipeName.CreateCommand]: CommandWithHandlerRecipe,
  [RecipeName.CreateQuery]: QueryWithHandlerRecipe,
  [RecipeName.CreateSubscriber]: SubscriberWithHandlerRecipe,
  [RecipeName.CreateEvent]: EventWithHandlerRecipe,

  // [RecipeName.CreateModel]: EventWithHandlerRecipe,
  // [RecipeName.CreateService]: EventWithHandlerRecipe,
};

(async () => {
  const maker = new MakerService();

  console.log(`
██████  ███████      ██ ███████ 
██   ██ ██           ██ ██      
██████  █████        ██ ███████ 
██   ██ ██      ██   ██      ██ 
██████  ██       █████  ███████`);
  console.log('Code Generator');
  console.log('--------------------------------');

  const recipeCategoryName = await maker.getRecipeCategoryName();
  const recipeSubcategoryName = await maker.getRecipeSubcategoryName(
    recipeCategoryName,
  );
  const recipeName = await maker.getRecipeName(recipeSubcategoryName);
  const recipeClass = RECIPES[recipeName];

  if (!recipeClass) {
    throw new Error('Maker command not attached');
  }

  const boundedContextName = await maker.getBoundedContext();
  const recipe = new recipeClass(boundedContextName);

  const nameInput = await maker.getInput();
  recipe.setName(nameInput);

  console.log('--------------------------------');
  console.log('Setting up...');
  maker.bindToContext(boundedContextName);
  await maker.executeRecipe(recipe);
})();
