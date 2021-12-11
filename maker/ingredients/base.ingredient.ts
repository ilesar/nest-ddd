import { camelCase, kebabCase, upperFirst } from 'lodash';

export abstract class BaseIngredient {
  protected readonly boundedContext: string;

  protected readonly name: string;

  constructor(name: string, boundedContext: string) {
    this.boundedContext = boundedContext;
    this.name = name;
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
