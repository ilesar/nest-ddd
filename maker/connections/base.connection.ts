import { FileFactory } from '../helpers/file.factory';
import { Project } from 'ts-morph';
import { camelCase, kebabCase, upperFirst } from 'lodash';

export class BaseConnection {
  protected readonly fileFactory: FileFactory;

  protected readonly name: string;

  protected readonly boundedContext: string;

  protected project: Project;

  constructor(name: string, boundedContext: string) {
    this.name = name;
    this.boundedContext = boundedContext;
  }

  bindProject(project: Project): void {
    this.project = project;
  }

  kebabName(): string {
    return kebabCase(this.name);
  }

  pascalName(): string {
    return upperFirst(camelCase(this.name));
  }

  camelName(): string {
    return camelCase(this.name);
  }
}
