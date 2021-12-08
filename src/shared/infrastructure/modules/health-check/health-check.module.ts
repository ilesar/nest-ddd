import { Module } from '@nestjs/common';
import { HealthCheckController } from './controllers/health-check.controller';

@Module({
  imports: [],
  providers: [],
  exports: [],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
