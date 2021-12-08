import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtWebConfig } from '@shared/infrastructure/config/jwt-web.config';
import { JwtLocalStrategy } from '@user/infrastructure/modules/auth/strategies/jwt-local.strategy';
import { JwtStrategy } from '@user/infrastructure/modules/auth/strategies/jwt.strategy';
import { IdentityManager } from '@user/infrastructure/modules/auth/services/identity-manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeormRepository } from '@user/infrastructure/modules/database/repositories/user-typeorm.repository';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CqrsModule,
    JwtModule.register(jwtWebConfig),
    TypeOrmModule.forFeature([UserTypeormRepository]),
  ],
  providers: [IdentityManager, JwtStrategy, JwtLocalStrategy],
  exports: [IdentityManager, JwtModule],
})
export class AuthModule {}
