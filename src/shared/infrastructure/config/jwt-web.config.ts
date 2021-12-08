import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtWebConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET,
};
