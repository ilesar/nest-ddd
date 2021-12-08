import { EntityRepository } from 'typeorm';
import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';
import { UserRepositoryInterface } from '@shared/domain/repositories/user-repository.interface';
import { TemplateRepository } from '@shared/infrastructure/modules/database/repositories/_template.repository';

@EntityRepository(UserEntity)
export class UserTypeormRepository
  extends TemplateRepository<UserEntity>
  implements UserRepositoryInterface {}
