import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class ServiceIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something-management.service.ts';
  }

  getImports(): any {
    return {
      '{ Injectable }': '@nestjs/common',
    };
  }

  getDecorators(): any {
    return {
      'Injectable()': null,
    };
  }

  getClassName(): string {
    return 'SomethingManagementService';
  }

  getClassExtends(): string | undefined {
    return;
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

  hasConstructor = true;

  getMethods(): any[] {
    return [];
  }
}
