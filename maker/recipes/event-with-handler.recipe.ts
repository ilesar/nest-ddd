import { RecipeInterface } from '../interfaces/recipe.interface';

export class EventWithHandlerRecipe implements RecipeInterface {
  execute(): void {
    throw new Error(`${this.constructor.name} not implemented.`);
  }
}
