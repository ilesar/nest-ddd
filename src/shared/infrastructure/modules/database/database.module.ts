import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as databaseConfig from '../../config/database.config';
import * as seedConfig from '../../config/seeder.config';
import { TypeormSeederService } from '@shared/infrastructure/modules/database/seeder/typeorm-seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature(seedConfig.seeds.map((seed) => seed.entity)),
  ],
  providers: [
    TypeormSeederService,
    ...seedConfig.seeds.map((seed) => seed.seeder),
  ],
  exports: [],
})
export class DatabaseModule {}
