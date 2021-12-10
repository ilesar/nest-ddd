import { RecipeInterface } from '../interfaces/recipe.interface';
import { FileFactory } from '../helpers/file.factory';
import { QueryIngredient } from '../ingredients/application/query.ingredient';

export class QueryWithHandlerRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory): void {
    fileFactory.createFileFromIngredient(new QueryIngredient());
  }
}
