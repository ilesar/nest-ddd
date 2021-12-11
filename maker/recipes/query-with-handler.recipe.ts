import { RecipeInterface } from '../interfaces/recipe.interface';
import { FileFactory } from '../helpers/file.factory';
import { QueryIngredient } from '../ingredients/application/query.ingredient';
import { QueryHandlerIngredient } from '../ingredients/application/query-handler.ingredient';

export class QueryWithHandlerRecipe implements RecipeInterface {
  execute(
    fileFactory: FileFactory,
    name: string,
    boundedContext: string,
  ): void {
    fileFactory.createFileFromIngredient(
      new QueryIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new QueryHandlerIngredient(name, boundedContext),
    );
  }
}
