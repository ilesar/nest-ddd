import { SentryModuleOptions } from '@ntegral/nestjs-sentry/lib/sentry.interfaces';
import { LogLevel } from '@sentry/types';

export const sentryConfig: SentryModuleOptions = {
  dsn: process.env.SENTRY_DSN,
  debug: process.env.SENTRY_DEBUG === 'true',
  environment: process.env.APP_ENV,
  release: 'init release',
  logLevel: LogLevel.Debug,
  tracesSampleRate: 1.0,
};
