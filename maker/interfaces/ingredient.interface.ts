export interface IngredientInterface {
  getFilePath(): string;
  getImports(): any;

  getClassName(): string | undefined;
  getClassExtends(): string | undefined;
  getClassImplements(): string[] | undefined;
  getInterfaceName(): string | undefined;
  getInterfaceExtends(): string[] | undefined;

  getDecorators(): any;
  getMethods(): any;
  hasConstructor: boolean;

  kebabName(): string;
  pascalName(): string;
  camelName(): string;
}
