import { Project } from 'ts-morph';

export interface ConnectionInterface {
  bindProject(project: Project): void;
  wireUp(): void;
  kebabName(): string;
  pascalName(): string;
  camelName(): string;
}
