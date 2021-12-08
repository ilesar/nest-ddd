import { KeyValueInterface } from '@shared/infrastructure/modules/cache/interfaces/key-value.interface';

export interface CacheServiceInterface {
  getBatch<T>(keys: string[]): Promise<T[]>;
  get<T>(key: string): Promise<T>;
  getWithWildcard(wildcard: string): Promise<string[]>;
  getTTL(key): Promise<any>;
  setBatch(arrayOfKeyValueObjects: KeyValueInterface[]): Promise<void>;
  set(key: string, value: any, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
}
