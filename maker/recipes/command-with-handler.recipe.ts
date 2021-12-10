import { RecipeInterface } from '../interfaces/recipe.interface';

export class CommandWithHandlerRecipe implements RecipeInterface {
  execute(): void {
    throw new Error(`${this.constructor.name} not implemented.`);
  }
}
