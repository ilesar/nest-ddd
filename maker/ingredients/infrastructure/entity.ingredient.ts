import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class EntityIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something.entity.ts';
  }

  getImports(): any {
    return {
      '{ Entity }': 'typeorm',
      '{ TemplateEntity }': '@core/templates/_template.entity',
    };
  }

  getDecorators(): any {
    return {
      Entity: [
        () => {
          return { name: 'something' };
        },
      ],
    };
  }

  getClassName(): string {
    return 'SomethingEntity';
  }

  getClassExtends(): string {
    return 'TemplateEntity';
  }

  getClassImplements(): string[] | undefined {
    return;
  }

  getInterfaceName(): string | undefined {
    return;
  }

  getInterfaceExtends(): string[] | undefined {
    return;
  }

  hasConstructor = false;

  getMethods(): any[] {
    return [];
  }
}
