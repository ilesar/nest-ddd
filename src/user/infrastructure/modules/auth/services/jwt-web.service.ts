import { JwtService as NestJwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtWebService {
  constructor(private readonly service: NestJwtService) {}

  createAccessToken(payload: string | Buffer | Record<string, unknown>) {
    return this.service.signAsync(payload);
  }
}
