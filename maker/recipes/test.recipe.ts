import { RecipeInterface } from '../interfaces/recipe.interface';
import { BaseRecipe } from './base.recipe';

export class TestRecipe extends BaseRecipe implements RecipeInterface {
  execute(): void {}
}
