import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseConfig: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  port: parseInt(process.env.DATABASE_PORT, 10),
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [__dirname + '/../modules/database/entities/*.entity.{ts,js}'],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [__dirname + '/../modules/database/migrations/*.{ts,js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
};

export = databaseConfig;
