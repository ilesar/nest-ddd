import { Injectable, Logger } from '@nestjs/common';
import { CountrySeeder } from './country.seeder';
import { SeederInterface } from '@shared/application/interfaces/seeder.interface';
import { UserSeeder } from '@shared/infrastructure/modules/database/seeder/user.seeder';
import { In } from 'typeorm';

@Injectable()
export class TypeormSeederService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly countrySeeder: CountrySeeder,
    private readonly userSeeder: UserSeeder,
  ) {}

  async seedDatabase(): Promise<void> {
    await this.executeSeeders([this.countrySeeder, this.userSeeder]);
  }

  private async executeSeeders(seeders: SeederInterface[]) {
    for (const seeder of seeders) {
      this.logger.log(`Executing ${seeder.entity.name} seeder`);

      const seedsFromDatabase = await this.getSeedsAlreadyInDatabase(seeder);

      const filteredSeeds = this.filterSeeds(
        seeder.compareColumns,
        seeder.getNewSeeds(),
        seedsFromDatabase,
      );

      this.logger.warn(`${filteredSeeds.length} new seeds`);

      await this.saveNewSeeds(seeder, filteredSeeds);
    }
  }

  private async getSeedsAlreadyInDatabase(seeder: SeederInterface) {
    if (seeder.getNewSeeds().length === 0) {
      return [];
    }

    if (seeder.compareColumns.length === 0) {
      throw new Error(
        `${seeder.repository.constructor.name} seeder has no compare columns!`,
      );
    }

    return seeder.repository.find({
      where: seeder.compareColumns.reduce((aggregator, compareColumn) => {
        return {
          ...aggregator,
          [compareColumn]: In(
            seeder.getNewSeeds().map((seed) => seed[compareColumn]),
          ),
        };
      }, {}),
    });
  }

  private filterSeeds(
    compareColumns: string[],
    newSeeds: any,
    seedsFromDatabase: any,
  ) {
    return newSeeds.filter((seed) => {
      return !seedsFromDatabase.find((databaseSeed) => {
        for (const compareColumn of compareColumns) {
          if (databaseSeed[compareColumn] !== seed[compareColumn]) {
            return false;
          }
        }

        return true;
      });
    });
  }

  private async saveNewSeeds(seeder: SeederInterface, filteredSeeds: any) {
    await seeder.entity.save(filteredSeeds);
  }
}
