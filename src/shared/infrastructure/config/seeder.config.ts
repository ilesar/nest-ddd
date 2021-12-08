import { CountrySeeder } from '../modules/database/seeder/country.seeder';
import { CountryEntity } from '../modules/database/entities/country.entity';
import { UserSeeder } from '@shared/infrastructure/modules/database/seeder/user.seeder';
import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';

const seedConfig = {
  seeds: [
    {
      seeder: CountrySeeder,
      entity: CountryEntity,
    },
    {
      seeder: UserSeeder,
      entity: UserEntity,
    },
  ],
};

export = seedConfig;
