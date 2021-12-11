import { RecipeInterface } from '../interfaces/recipe.interface';
import { EntityIngredient } from '../ingredients/infrastructure/entity.ingredient';
import { ModelIngredient } from '../ingredients/domain/model.ingredient';
import { DtoIngredient } from '../ingredients/infrastructure/dto.ingredient';
import { InputIngredient } from '../ingredients/infrastructure/input.ingredient';
import { BaseRecipe } from './base.recipe';
import inquirer from 'inquirer';

export class EntityWithApiRecipe extends BaseRecipe implements RecipeInterface {
  async execute(): Promise<void> {
    this.fileFactory.createFileFromIngredient(
      new EntityIngredient(this.name, this.boundedContext),
    );
    this.fileFactory.createFileFromIngredient(
      new ModelIngredient(this.name, this.boundedContext),
    );

    const createAPI = await inquirer
      .prompt([
        {
          type: 'confirm',
          message: 'Do you want to expose the entity on the API?',
          name: 'createAPI',
        },
      ])
      .then((answers) => {
        return answers['createAPI'];
      })
      .catch((error) => {
        if (error.isTtyError) {
          throw new Error('Question cannot be rendered!');
        } else {
          throw error;
        }
      });

    if (createAPI) {
      this.fileFactory.createFileFromIngredient(
        new DtoIngredient(this.name, this.boundedContext),
      );

      const enabledRoutes = await inquirer
        .prompt([
          {
            type: 'checkbox',
            message: 'Which CRUD methods do you want to enable?',
            name: 'enableCRUD',
            choices: [
              'create',
              'read',
              'update',
              'delete',
              'createMany',
              'readMany',
              'updateMany',
              'deleteMany',
            ],
            default: ['read', 'readMany'],
          },
        ])
        .then((answers) => {
          return answers['enableCRUD'];
        })
        .catch((error) => {
          if (error.isTtyError) {
            throw new Error('Question cannot be rendered!');
          } else {
            throw error;
          }
        });

      if (enabledRoutes) {
        console.log(enabledRoutes);
      }
    }
  }
}
