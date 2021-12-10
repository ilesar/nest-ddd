import { FileFactory } from '../helpers/file.factory';

export interface RecipeInterface {
  execute(fileFactory: FileFactory, boundedContext: string): void;
}
