import { FileFactory } from '../helpers/file.factory';
import * as inquirer from 'inquirer';
import { MakerCommand } from '../enums/maker-command.enum';
import { RecipeInterface } from '../interfaces/recipe.interface';

export class MakerService {
  private boundedContext: string;

  private name: string;

  bindToContext(boundedContextName: string) {
    this.boundedContext = boundedContextName;
  }

  setName(name: string) {
    this.name = name;
  }

  executeRecipe(recipe: RecipeInterface) {
    recipe.execute(new FileFactory(), this.name, this.boundedContext);
  }

  async getBoundedContext(): Promise<string> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'bounded_context',
            choices: ['user', 'shared'],
          },
        ])
        .then((answers) => {
          resolve(answers['bounded_context']);
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

  public async getMakerCommandName(): Promise<MakerCommand> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'maker_command',
            choices: [
              MakerCommand.Command,
              MakerCommand.Test,
              MakerCommand.Entity,
              MakerCommand.Query,
              MakerCommand.Subscriber,
              MakerCommand.Event,
            ],
          },
        ])
        .then((answers) => {
          resolve(answers['maker_command']);
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
            name: 'command',
          },
        ])
        .then((answers) => {
          resolve(answers['command']);
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
