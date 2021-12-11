import { FileFactory } from '../helpers/file.factory';
import { RecipeInterface } from '../interfaces/recipe.interface';

export class TestRecipe implements RecipeInterface {
  execute(
    fileFactory: FileFactory,
    name: string,
    boundedContext: string,
  ): void {}
}
