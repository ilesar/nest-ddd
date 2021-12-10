import { FileFactory } from '../helpers/file.factory';
import { CommandIngredient } from '../ingredients/application/command.ingredient';
import { RecipeInterface } from '../interfaces/recipe.interface';
import { CommandHandlerIngredient } from '../ingredients/application/command-handler.ingredient';
import { EventIngredient } from '../ingredients/application/event.ingredient';
import { QueryIngredient } from '../ingredients/application/query.ingredient';
import { SubscriberIngredient } from '../ingredients/application/subscriber.ingredient';
import { QueryHandlerIngredient } from '../ingredients/application/query-handler.ingredient';
import { SubscriberHandlerIngredient } from '../ingredients/application/subscriber-handler.ingredient';
import { EventHandlerIngredient } from '../ingredients/application/event-handler.ingredient';
import { ModelIngredient } from '../ingredients/domain/model.ingredient';
import { ServiceIngredient } from '../ingredients/domain/service.ingredient';
import { RepositoryInterfaceIngredient } from '../ingredients/domain/repository-interface.ingredient';
import { DtoIngredient } from '../ingredients/infrastructure/dto.ingredient';
import { InputIngredient } from '../ingredients/infrastructure/input.ingredient';
import { CreateInputIngredient } from '../ingredients/infrastructure/create-input.ingredient';
import { UpdateInputIngredient } from '../ingredients/infrastructure/update-input.ingredient';
import { EntityIngredient } from '../ingredients/infrastructure/entity.ingredient';
import { RepositoryIngredient } from '../ingredients/infrastructure/repository.ingredient';

export class BoundedContextRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory): void {}
}
