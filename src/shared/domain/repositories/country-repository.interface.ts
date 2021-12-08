import { RepositoryInterface } from '@core/templates/_template-repository.interface';
import { Country } from '@shared/domain/models/country.model';

export interface CountryRepositoryInterface
  extends RepositoryInterface<Country> {}
