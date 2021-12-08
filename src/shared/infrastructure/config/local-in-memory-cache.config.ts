export const localInMemoryCacheConfig = {
  ttl: +process.env.CACHE_TTL, // seconds
  max: process.env.CACHE_MAX_ITEMS, // maximum number of items in cache
};
