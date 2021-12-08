import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from '../entities/country.entity';
import { SeederInterface } from '@shared/application/interfaces/seeder.interface';
import { countriesSeed as countriesFromFile } from '@shared/application/seeds/countries.seed';

@Injectable()
export class CountrySeeder implements SeederInterface {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  getNewSeeds() {
    return countriesFromFile;
  }

  compareColumns = ['code'];

  repository = this.countryRepository;

  entity = CountryEntity;
}
