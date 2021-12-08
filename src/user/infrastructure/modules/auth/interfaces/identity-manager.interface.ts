import { JwtPayloadInterface } from './jwt-payload.interface';

export interface IdentityManagerInterface {
  validateJwt(jwtPayload: JwtPayloadInterface): void;
}
