export interface IngredientInterface {
  getFilePath(): string;
  getImports(): any;
  getClassName(): string;
  getClassExtends(): string;
  getDecorators(): any;
  getMethods(): any;
  hasConstructor: boolean;
}
