import { IProcessor } from 'typeorm-fixtures-cli';
import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';
import * as faker from 'faker';
import { countriesSeed } from '@shared/application/seeds/countries.seed';

export default class UserProcessor implements IProcessor<UserEntity> {
  async preProcess(name: string, object: any): Promise<any> {
    return {
      ...object,
      country: this.getRandomCountryId(),
    };
  }

  getRandomCountryId() {
    const randomNumber = faker.datatype.number({
      min: 0,
      max: countriesSeed.length - 1,
    });
    return countriesSeed[randomNumber].id;
  }
}
