import { RepositoryInterface } from '@core/templates/_template-repository.interface';
import { User } from '@shared/domain/models/user.model';

export interface UserRepositoryInterface extends RepositoryInterface<User> {}
