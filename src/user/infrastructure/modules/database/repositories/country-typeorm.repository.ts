import { EntityRepository } from 'typeorm';
import { CountryEntity } from '@shared/infrastructure/modules/database/entities/country.entity';
import { CountryRepositoryInterface } from '@shared/domain/repositories/country-repository.interface';
import { TemplateRepository } from '@shared/infrastructure/modules/database/repositories/_template.repository';

@EntityRepository(CountryEntity)
export class CountryTypeormRepository
  extends TemplateRepository<CountryEntity>
  implements CountryRepositoryInterface {}
