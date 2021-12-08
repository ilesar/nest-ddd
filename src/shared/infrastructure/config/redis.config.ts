export const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  ttl: +process.env.CACHE_TTL, // seconds
  max: +process.env.CACHE_MAX_ITEMS, // maximum number of items in cache
};
