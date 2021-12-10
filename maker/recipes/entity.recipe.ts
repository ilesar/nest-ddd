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
  execute(fileFactory: FileFactory): void {
    fileFactory.createFileFromIngredient(new ModelIngredient());
    fileFactory.createFileFromIngredient(new RepositoryInterfaceIngredient());
    fileFactory.createFileFromIngredient(new DtoIngredient());
    fileFactory.createFileFromIngredient(new InputIngredient());
    fileFactory.createFileFromIngredient(new CreateInputIngredient());
    fileFactory.createFileFromIngredient(new UpdateInputIngredient());
    fileFactory.createFileFromIngredient(new EntityIngredient());
    fileFactory.createFileFromIngredient(new RepositoryIngredient());
  }
}
