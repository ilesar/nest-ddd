import { FileFactory } from '../helpers/file.factory';

export interface RecipeInterface {
  execute(fileFactory: FileFactory, name: string, boundedContext: string): void;
}
