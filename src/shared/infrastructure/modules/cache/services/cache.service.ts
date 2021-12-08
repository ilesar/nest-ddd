import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { KeyValueInterface } from '@shared/infrastructure/modules/cache/interfaces/key-value.interface';
import { CacheServiceInterface } from '@shared/application/interfaces/cache-service.interface';

@Injectable()
export class CacheService implements CacheServiceInterface {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: any) {}

  async getTTL(key): Promise<any> {
    return this.cacheManager.ttl(key);
  }

  async getWithWildcard(wildcard: string): Promise<string[]> {
    return this.cacheManager.keys(wildcard);
  }

  async get<T>(key: string): Promise<T> {
    const value = await this.cacheManager.get(key);

    return this.parseValue(value);
  }

  async getBatch<T>(keys: string[]): Promise<T[]> {
    const values: [] = await this.cacheManager.store.mget(...keys);
    return values.map(this.parseValue);
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const stringifiedValue =
      typeof value === 'string' ? value : JSON.stringify(value);

    await this.cacheManager.set(key, stringifiedValue, { ttl });
  }

  async setBatch(arrayOfKeyValueObjects: KeyValueInterface[]): Promise<void> {
    const arrayOfConsecutiveKeysAndValues =
      this.createArrayOfConsecutiveKeysAndValues(arrayOfKeyValueObjects);
    await this.cacheManager.store.mset(...arrayOfConsecutiveKeysAndValues);
  }

  async delete(key: string) {
    await this.cacheManager.del(key);
  }

  private createArrayOfConsecutiveKeysAndValues(
    arrayOfKeyValueObjects: KeyValueInterface[],
  ): any[] {
    return arrayOfKeyValueObjects.reduce(
      (arrayOfConsecutiveKeysAndValues, item) => {
        return arrayOfConsecutiveKeysAndValues.concat([
          item.key,
          JSON.stringify(item.value),
        ]);
      },
      [],
    );
  }

  private parseValue(value: string | null): any {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
}
