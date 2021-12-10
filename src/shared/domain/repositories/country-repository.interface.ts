import { RepositoryInterface } from '@core/interfaces/repository.interface';
import { Country } from '@shared/domain/models/country.model';

export interface CountryRepositoryInterface
  extends RepositoryInterface<Country> {}
