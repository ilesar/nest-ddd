import { FileFactory } from '../helpers/file.factory';
import * as inquirer from 'inquirer';
import { MakerCommand } from '../enums/maker-command.enum';
import { RecipeInterface } from '../interfaces/recipe.interface';

export class MakerService {
  private fileFactory: FileFactory;

  public async getCommandName(): Promise<MakerCommand> {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'maker_command',
            choices: [
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

  executeRecipe(recipe: RecipeInterface) {
    recipe.execute();
  }
}
