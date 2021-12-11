import { RecipeInterface } from '../interfaces/recipe.interface';
import { EntityIngredient } from '../ingredients/infrastructure/entity.ingredient';
import { ModelIngredient } from '../ingredients/domain/model.ingredient';
import { RepositoryInterfaceIngredient } from '../ingredients/domain/repository-interface.ingredient';
import { DtoIngredient } from '../ingredients/infrastructure/dto.ingredient';
import { InputIngredient } from '../ingredients/infrastructure/input.ingredient';
import { CreateInputIngredient } from '../ingredients/infrastructure/create-input.ingredient';
import { UpdateInputIngredient } from '../ingredients/infrastructure/update-input.ingredient';
import { RepositoryIngredient } from '../ingredients/infrastructure/repository.ingredient';
import { BaseRecipe } from './base.recipe';

export class EntityRecipe extends BaseRecipe implements RecipeInterface {
  execute(): void {
    this.fileFactory.createFileFromIngredient(
      new ModelIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new RepositoryInterfaceIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new DtoIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new InputIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new CreateInputIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new UpdateInputIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new EntityIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new RepositoryIngredient(this.name, this.boundedContext),
    );
  }
}
