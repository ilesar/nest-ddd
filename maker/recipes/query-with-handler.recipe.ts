import { RecipeInterface } from '../interfaces/recipe.interface';

export class QueryWithHandlerRecipe implements RecipeInterface {
  execute(): void {
    throw new Error(`${this.constructor.name} not implemented.`);
  }
}
