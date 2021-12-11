import { RecipeInterface } from '../interfaces/recipe.interface';
import { QueryIngredient } from '../ingredients/application/query.ingredient';
import { QueryHandlerIngredient } from '../ingredients/application/query-handler.ingredient';
import { BaseRecipe } from './base.recipe';
import { AddQueryToApplicationLayerConnection } from '../connections/add-query-to-application-layer.connection';

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
    this.fileFactory.updateFilesFromConnection(
      new AddQueryToApplicationLayerConnection(this.name, this.boundedContext),
    );
  }
}
