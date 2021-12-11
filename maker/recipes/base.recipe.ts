import { FileFactory } from '../helpers/file.factory';

export abstract class BaseRecipe {
  protected _fileFactory: FileFactory;

  protected name: string;

  protected readonly boundedContext: string;

  constructor(boundedContext: string) {
    this.boundedContext = boundedContext;
  }

  setName(name: string) {
    this.name = name;
  }

  get fileFactory() {
    if (!this._fileFactory) {
      console.log(`Booting FileFactory...`);
      this._fileFactory = new FileFactory();
      console.log(`Dependencies injected successfully!`);
      console.log(`-----------------------------------`);
    }

    return this._fileFactory;
  }
}
