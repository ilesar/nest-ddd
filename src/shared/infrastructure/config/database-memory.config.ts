import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseMemoryConfig: ConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  dropSchema: true,
  entities: [__dirname + '/../modules/database/entities/*.entity.{ts,js}'],
};

export = databaseMemoryConfig;
