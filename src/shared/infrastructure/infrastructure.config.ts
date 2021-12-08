import { DatabaseModule } from './modules/database/database.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { InfrastructureConfigInterface } from '@root/core/interfaces/infrastructure-config.interface';
import { HealthCheckModule } from '@shared/infrastructure/modules/health-check/health-check.module';
import { StaticModule } from '@shared/infrastructure/modules/static/static.module';
import { StatusMonitorModule } from 'nest-status-monitor';
import { statusMonitorConfig } from '@shared/infrastructure/config/status-monitor.config';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from '@shared/infrastructure/config/mailer.config';
import { StorageModule } from '@codebrew/nestjs-storage';
import { storageConfig } from '@shared/infrastructure/config/storage.config';
import { AdminModule } from '@adminjs/nestjs';
import { adminConfig } from '@shared/infrastructure/config/admin.config';
import { ConfigModule } from '@nestjs/config';
import { GraphqlInterceptor, SentryModule } from '@ntegral/nestjs-sentry';
import { sentryConfig } from '@shared/infrastructure/config/sentry.config';
import { APP_INTERCEPTOR } from '@nestjs/core';

export const infrastructureConfig: InfrastructureConfigInterface = {
  modules: [
    DatabaseModule,
    GraphqlModule,
    HealthCheckModule,
    StaticModule,
    StatusMonitorModule.setUp(statusMonitorConfig),
    ScheduleModule.forRoot(),
    MailerModule.forRootAsync({ useFactory: () => mailerConfig }),
    StorageModule.forRootAsync({ useFactory: () => storageConfig }),
    AdminModule.createAdminAsync({ useFactory: () => adminConfig }),
    SentryModule.forRootAsync({ useFactory: () => sentryConfig }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => new GraphqlInterceptor(),
    },
  ],
};
