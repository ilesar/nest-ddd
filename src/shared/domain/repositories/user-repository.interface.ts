import { RepositoryInterface } from '@core/interfaces/repository.interface';
import { User } from '@shared/domain/models/user.model';

export interface UserRepositoryInterface extends RepositoryInterface<User> {}
