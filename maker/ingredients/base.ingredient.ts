import { camelCase, kebabCase, upperFirst } from 'lodash';

export abstract class BaseIngredient {
  protected readonly boundedContext: string;

  protected readonly name: string;

  constructor(name?: string, boundedContext?: string) {
    this.boundedContext = boundedContext;
    this.name = name;
  }

  kebabName() {
    return kebabCase(this.name);
  }

  pascalName() {
    return upperFirst(camelCase(this.name));
  }

  camelName() {
    return camelCase(this.name);
  }
}
