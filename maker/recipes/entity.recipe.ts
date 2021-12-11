import { FileFactory } from '../helpers/file.factory';
import { RecipeInterface } from '../interfaces/recipe.interface';
import { EntityIngredient } from '../ingredients/infrastructure/entity.ingredient';
import { ModelIngredient } from '../ingredients/domain/model.ingredient';
import { RepositoryInterfaceIngredient } from '../ingredients/domain/repository-interface.ingredient';
import { DtoIngredient } from '../ingredients/infrastructure/dto.ingredient';
import { InputIngredient } from '../ingredients/infrastructure/input.ingredient';
import { CreateInputIngredient } from '../ingredients/infrastructure/create-input.ingredient';
import { UpdateInputIngredient } from '../ingredients/infrastructure/update-input.ingredient';
import { RepositoryIngredient } from '../ingredients/infrastructure/repository.ingredient';

export class EntityRecipe implements RecipeInterface {
  execute(
    fileFactory: FileFactory,
    name: string,
    boundedContext: string,
  ): void {
    fileFactory.createFileFromIngredient(
      new ModelIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new RepositoryInterfaceIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new DtoIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new InputIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new CreateInputIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new UpdateInputIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new EntityIngredient(name, boundedContext),
    );
    fileFactory.createFileFromIngredient(
      new RepositoryIngredient(name, boundedContext),
    );
  }
}
