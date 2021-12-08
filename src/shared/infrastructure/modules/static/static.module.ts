import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { appConfig } from '@shared/infrastructure/config/app.config';
import { Environment } from '@root/core/enums/environment.enum';

@Module({
  imports: (() => {
    if (appConfig.environment !== Environment.Development) {
      return [];
    }

    return [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../../../../..', 'public'),
        exclude: ['/api*', '/graphql*'],
      }),
    ];
  })(),
  providers: [],
  exports: [],
})
export class StaticModule {}
