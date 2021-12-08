import { CacheModule, Module } from '@nestjs/common';
import { CacheService } from '@shared/infrastructure/modules/cache/services/cache.service';
import { redisConfig } from '@shared/infrastructure/config/redis.config';
import * as redisStore from 'cache-manager-redis-store';
import { CacheAdapterEnum } from '@shared/application/enums/cache-adapter.enum';
import { localInMemoryCacheConfig } from '@shared/infrastructure/config/local-in-memory-cache.config';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => {
        switch (process.env.CACHE_ADAPTER) {
          case CacheAdapterEnum.LOCAL_IN_MEMORY:
            return { localInMemoryCacheConfig };
          case CacheAdapterEnum.REDIS:
            return { ...redisConfig, store: redisStore };
          default:
            return { ...redisConfig, store: redisStore };
        }
      },
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CustomCacheModule {}
