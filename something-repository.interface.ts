import { Something } from './something.model';
import { RepositoryInterface } from '@core/interfaces/repository.interface';

export interface SomethingRepositoryInterface
  extends RepositoryInterface<Something> {}
