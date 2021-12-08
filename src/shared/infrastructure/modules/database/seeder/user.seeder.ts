import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeederInterface } from '@shared/application/interfaces/seeder.interface';
import { userSeed } from '@shared/application/seeds/user.seed';
import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';

@Injectable()
export class UserSeeder implements SeederInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getNewSeeds() {
    return this.mergeUserSeeds();
  }

  mergeUserSeeds() {
    return Array.prototype.concat(userSeed);
  }

  compareColumns = ['phoneNumber'];

  repository = this.userRepository;

  entity = UserEntity;
}
