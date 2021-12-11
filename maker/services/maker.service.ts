import { FileFactory } from '../helpers/file.factory';
import * as inquirer from 'inquirer';
import { RecipeName } from '../enums/maker-command.enum';
import { RecipeInterface } from '../interfaces/recipe.interface';
import * as chalk from 'chalk';

export class MakerService {
  private boundedContext: string;

  private name: string;

  bindToContext(boundedContextName: string) {
    console.log(chalk.grey('Binding recipe to context...'));
    this.boundedContext = boundedContextName;
  }

  setName(name: string) {
    this.name = name;
  }

  executeRecipe(recipe: RecipeInterface) {
    console.log(chalk.grey(`Executing recipe ${recipe.constructor.name}...`));
    recipe.execute(new FileFactory(), this.name, this.boundedContext);
    console.log(chalk.green('Recipe executed successfully!'));
  }

  public async getRecipeName(): Promise<RecipeName> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            message: 'What do you want to create?',
            name: 'recipe',
            loop: false,
            choices: [
              RecipeName.Command,
              RecipeName.Query,
              RecipeName.Subscriber,
              RecipeName.Event,
              // MakerCommand.Entity,
              // MakerCommand.Test,
            ],
          },
        ])
        .then((answers) => {
          resolve(answers['recipe']);
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

  async getBoundedContext(): Promise<string> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            message: 'Which bounded context will it belong to?',
            name: 'context',
            loop: false,
            choices: ['user'],
          },
        ])
        .then((answers) => {
          resolve(answers['context']);
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

  async getCommandName(): Promise<string> {
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
}
