import { RecipeInterface } from '../interfaces/recipe.interface';
import { QueryIngredient } from '../ingredients/application/query.ingredient';
import { QueryHandlerIngredient } from '../ingredients/application/query-handler.ingredient';
import { BaseRecipe } from './base.recipe';

export class QueryWithHandlerRecipe
  extends BaseRecipe
  implements RecipeInterface
{
  execute(): void {
    this.fileFactory.createFileFromIngredient(
      new QueryIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new QueryHandlerIngredient(this.name, this.boundedContext),
    );
  }
}
