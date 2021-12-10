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

export class TestRecipe implements RecipeInterface {
  execute(fileFactory: FileFactory): void {
    // fileFactory.createFileFromIngredient(new CommandIngredient());
    // fileFactory.createFileFromIngredient(new CommandHandlerIngredient());
    // fileFactory.createFileFromIngredient(new QueryIngredient());
    // fileFactory.createFileFromIngredient(new QueryHandlerIngredient());
    // fileFactory.createFileFromIngredient(new SubscriberIngredient());
    // fileFactory.createFileFromIngredient(new SubscriberHandlerIngredient());
    // fileFactory.createFileFromIngredient(new EventIngredient());
    // fileFactory.createFileFromIngredient(new EventHandlerIngredient());
    //
    // fileFactory.createFileFromIngredient(new ModelIngredient());
    // fileFactory.createFileFromIngredient(new ServiceIngredient());
    // fileFactory.createFileFromIngredient(new RepositoryInterfaceIngredient());
    //
    // fileFactory.createFileFromIngredient(new DtoIngredient());
    // fileFactory.createFileFromIngredient(new InputIngredient());
    // fileFactory.createFileFromIngredient(new CreateInputIngredient());
    // fileFactory.createFileFromIngredient(new UpdateInputIngredient());
    // fileFactory.createFileFromIngredient(new EntityIngredient());
    // fileFactory.createFileFromIngredient(new RepositoryIngredient());
  }
}
