import { FileFactory } from '../helpers/file.factory';
import * as inquirer from 'inquirer';
import { MakerCommand } from '../enums/maker-command.enum';
import { RecipeInterface } from '../interfaces/recipe.interface';

export class MakerService {
  private boundedContext;

  bindToContext(boundedContextName: unknown) {
    this.boundedContext = boundedContextName;
  }

  executeRecipe(recipe: RecipeInterface) {
    recipe.execute(new FileFactory(), this.boundedContext);
  }

  async getBoundedContext() {
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

  public async getCommandName(): Promise<MakerCommand> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'maker_command',
            choices: [
              MakerCommand.Test,
              MakerCommand.Entity,
              MakerCommand.Command,
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
}
