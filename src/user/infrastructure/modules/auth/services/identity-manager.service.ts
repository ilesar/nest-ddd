import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IdentityManagerInterface } from '@user/infrastructure/modules/auth/interfaces/identity-manager.interface';
import { JwtPayloadInterface } from '@user/infrastructure/modules/auth/interfaces/jwt-payload.interface';

@Injectable()
export class IdentityManager implements IdentityManagerInterface {
  validateJwt(jwtPayload: JwtPayloadInterface): void {
    const timeDiff = jwtPayload.exp - jwtPayload.iat;

    if (timeDiff <= 0) {
      throw new UnauthorizedException();
    }
  }
}
