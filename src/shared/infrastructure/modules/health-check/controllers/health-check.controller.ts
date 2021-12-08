import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthCheckController {
  @Get('')
  healthCheck() {
    return 'Hello World';
  }

  @Get('check')
  envEcheck() {
    return process.env.APP_ENV;
  }
}
