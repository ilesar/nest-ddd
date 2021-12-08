import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';
import { JwtPayloadInterface } from '@user/infrastructure/modules/auth/interfaces/jwt-payload.interface';
import { IdentityManager } from '../services/identity-manager.service';
import { CommandBus } from '@nestjs/cqrs';
import * as authConfig from '@shared/infrastructure/config/auth.config';
import { CreateUserCommand } from '@user/application/commands/create-user.command';
import { toLower } from 'lodash';
import { UserRole } from '@shared/domain/enums/user-role.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly authService: IdentityManager,
    private readonly commandBus: CommandBus,
  ) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: authConfig.authority,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      algorithms: ['RS256'],
    });
  }

  public async validate(jwtPayload: JwtPayloadInterface) {
    await this.authService.validateJwt(jwtPayload);

    const externalId = jwtPayload['cognito:username'];
    const role = jwtPayload['custom:role'];
    const countryId = jwtPayload['custom:country'];
    const phoneNumber = jwtPayload.phone_number;

    if (!role) {
      throw new BadRequestException(
        'Cognito user has to be registered with a role',
      );
    }

    if (!countryId) {
      throw new BadRequestException(
        'Cognito user has to be registered with a country',
      );
    }

    return await this.commandBus.execute(
      new CreateUserCommand(
        externalId,
        phoneNumber,
        toLower(role) as UserRole,
        countryId,
      ),
    );
  }
}
