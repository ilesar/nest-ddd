import { RecipeSubcategoryDomain } from '../enums/recipe-subcategory-domain.enum';
import { RecipeSubcategoryApplication } from '../enums/recipe-subcategory-application.enum';
import { RecipeSubcategoryInfrastructure } from '../enums/recipe-subcategory-infrastructure.enum';
import { GeneralSubcategory } from '../enums/general-subcategory.enum';

export type RecipeSubcategory =
  | GeneralSubcategory
  | RecipeSubcategoryDomain
  | RecipeSubcategoryApplication
  | RecipeSubcategoryInfrastructure;
