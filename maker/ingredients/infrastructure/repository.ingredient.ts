import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class RepositoryIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'something.repository.ts';
  }

  getImports(): any {
    return {
      '{ EntityRepository }': 'typeorm',
      '{ SomethingEntity }': './something.entity',
      '{ SomethingRepositoryInterface }': './something-repository.interface',
      '{ TemplateRepository }': '@core/templates/_template.repository',
    };
  }

  getDecorators(): any {
    return {
      EntityRepository: ['SomethingEntity'],
    };
  }

  getClassName(): string {
    return 'SomethingTypeormRepository';
  }

  getClassExtends(): string {
    return 'TemplateRepository<SomethingEntity>';
  }

  getClassImplements(): string[] | undefined {
    return ['SomethingRepositoryInterface'];
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
