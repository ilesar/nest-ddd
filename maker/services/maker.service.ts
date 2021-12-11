import * as inquirer from 'inquirer';
import { RecipeName } from '../enums/recipe-name.enum';
import { RecipeInterface } from '../interfaces/recipe.interface';
import * as chalk from 'chalk';
import { RecipeCategory } from '../enums/recipe-category.enum';
import { RecipeSubcategory } from './recipe-subcategory.type';
import { snakeCase } from 'lodash';
import { RecipeSubcategoryInfrastructure } from '../enums/recipe-subcategory-infrastructure.enum';
import { RecipeSubcategoryApplication } from '../enums/recipe-subcategory-application.enum';
import { RecipeSubcategoryDomain } from '../enums/recipe-subcategory-domain.enum';
import { GeneralSubcategory } from '../enums/general-subcategory.enum';

export class MakerService {
  private boundedContext: string;

  async getRecipeCategoryName(): Promise<RecipeCategory> {
    return this.getChoice<RecipeCategory>(
      'Which layer would you like to change',
      [
        RecipeCategory.ManageInfrastructureLayer,
        RecipeCategory.ManageApplicationLayer,
        RecipeCategory.ManageDomainLayer,
      ],
    );
  }

  async getRecipeSubcategoryName(
    recipeCategory: RecipeCategory,
  ): Promise<RecipeSubcategory> {
    return this.getChoice<RecipeSubcategory>(
      'Which recipe group?',
      (() => {
        switch (recipeCategory) {
          case RecipeCategory.ManageInfrastructureLayer:
            return [
              RecipeSubcategoryInfrastructure.OverrideCrud,
              RecipeSubcategoryInfrastructure.CreateCustomAction,
              RecipeSubcategoryInfrastructure.EntityManagement,
            ];
          case RecipeCategory.ManageApplicationLayer:
            return [
              RecipeSubcategoryApplication.Commands,
              RecipeSubcategoryApplication.Queries,
              RecipeSubcategoryApplication.Subscribers,
              RecipeSubcategoryApplication.Events,
            ];
          case RecipeCategory.ManageDomainLayer:
            return [
              RecipeSubcategoryDomain.Models,
              RecipeSubcategoryDomain.Services,
            ];
          default:
            throw new Error('Unknown recipe category');
        }
      })(),
    );
  }

  public async getRecipeName(
    recipeSubcategory: RecipeSubcategory,
  ): Promise<RecipeName> {
    return this.getChoice<RecipeName>(
      'Which recipe?',
      (() => {
        switch (recipeSubcategory) {
          case GeneralSubcategory.BoundedContext:
            return [RecipeName.CreateBoundedContext];
          case RecipeSubcategoryInfrastructure.OverrideCrud:
            return [
              RecipeName.OverrideCreate,
              RecipeName.OverrideRead,
              RecipeName.OverrideUpdate,
              RecipeName.OverrideDelete,
              RecipeName.OverrideCreateMany,
              RecipeName.OverrideReadMany,
              RecipeName.OverrideUpdateMany,
              RecipeName.OverrideDeleteMany,
            ];
          case RecipeSubcategoryInfrastructure.CreateCustomAction:
            return [
              RecipeName.CreateGraphQlQuery,
              RecipeName.CreateGraphQlMutation,
              RecipeName.CreateGraphQlSubscription,
            ];
          case RecipeSubcategoryInfrastructure.EntityManagement:
            return [RecipeName.CreateEntityWithApi];
          case RecipeSubcategoryApplication.Commands:
            return [RecipeName.CreateCommand];
          case RecipeSubcategoryApplication.Queries:
            return [RecipeName.CreateQuery];
          case RecipeSubcategoryApplication.Subscribers:
            return [RecipeName.CreateSubscriber];
          case RecipeSubcategoryApplication.Events:
            return [RecipeName.CreateEvent];
          case RecipeSubcategoryDomain.Models:
            return [RecipeName.CreateModel];
          case RecipeSubcategoryDomain.Services:
            return [RecipeName.CreateService];
          default:
            throw new Error('Unknown recipe subcategory');
        }
      })(),
    );
  }

  async getBoundedContext(): Promise<string> {
    return this.getChoice<string>('Which bounded context will it belong to?', [
      'user',
    ]);
  }

  async getInput(): Promise<string> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'How do you want to call it?',
            name: 'name',
          },
        ])
        .then((answers) => {
          resolve(answers['name']);
        })
        .catch((error) => {
          if (error.isTtyError) {
            throw new Error('Question cannot be rendered!');
          } else {
            reject(error);
          }
        });
    });
  }

  bindToContext(boundedContextName: string) {
    console.log('Binding recipe to context...');
    this.boundedContext = boundedContextName;
  }

  async executeRecipe(recipe: RecipeInterface) {
    console.log(`Preparing recipe ${recipe.constructor.name}...`);
    await recipe.execute();
    console.log('----------------------------');
    console.log(chalk.bold.green('Recipe executed successfully!'));
  }

  private getChoice<R>(question: string, choices: string[]): Promise<R> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            message: question,
            name: snakeCase(question),
            loop: false,
            choices: choices,
          },
        ])
        .then((answers) => {
          resolve(answers[snakeCase(question)]);
        })
        .catch((error) => {
          if (error.isTtyError) {
            throw new Error('Question cannot be rendered!');
          } else {
            reject(error);
          }
        });
    });
  }
}
