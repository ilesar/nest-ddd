import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtWebConfig } from '@shared/infrastructure/config/jwt-web.config';
import { QueryBus } from '@nestjs/cqrs';
import { GetUserQuery } from '@root/user/application/queries/get-user.query';

@Injectable()
export class JwtLocalStrategy extends PassportStrategy(Strategy, 'jwt-local') {
  constructor(private readonly queryCommand: QueryBus) {
    super({
      secretOrKey: jwtWebConfig.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate(payload: any) {
    const userId = payload?.id;
    const user = await this.queryCommand.execute(new GetUserQuery(userId));

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
