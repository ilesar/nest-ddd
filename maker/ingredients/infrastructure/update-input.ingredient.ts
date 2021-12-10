import { IngredientInterface } from '../../interfaces/ingredient.interface';

export class UpdateInputIngredient implements IngredientInterface {
  getFilePath(): string {
    return 'update-something.input.ts';
  }

  getImports(): any {
    return {
      [`{ 
  InputType,
  PartialType,
  IntersectionType,
  PickType,
}`]: '@nestjs/graphql',
      '{ CreateSomethingInput }': './create-something.input',
      '{ TemplateDto }': '@core/templates/_template.dto',
    };
  }

  getDecorators(): any {
    return {
      'InputType()': null,
    };
  }

  getClassName(): string {
    return 'UpdateSomethingInput';
  }

  getClassExtends(): string {
    return `IntersectionType(
PickType(TemplateDto, ['id'] as const),
PartialType(
  PickType(CreateSomethingInput, [
    /* updateable properties here */
  ] as const),
),
)`;
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
