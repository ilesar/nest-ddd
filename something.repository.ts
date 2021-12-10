import { EntityRepository } from 'typeorm';
import { SomethingEntity } from './something.entity';
import { SomethingRepositoryInterface } from './something-repository.interface';
import { TemplateRepository } from '@core/templates/_template.repository';

@EntityRepository(SomethingEntity)
export class SomethingTypeormRepository extends TemplateRepository<SomethingEntity> implements SomethingRepositoryInterface {
}
