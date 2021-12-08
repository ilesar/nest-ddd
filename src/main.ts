import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WinstonLoggerService } from '@nest-toolbox/winston-logger';
import * as sourceMapSupport from 'source-map-support';
import { DependencyGraphModule } from '@shared/infrastructure/modules/dependency-graph/dependency-graph.module';
import { Environment } from '@root/core/enums/environment.enum';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule, {
    logger: new WinstonLoggerService({
      projectName: 'petarpetru',
    }),
  });

  sourceMapSupport.install();

  if (process.env.APP_ENV === Environment.Development) {
    DependencyGraphModule.generateGraph(app, MainModule.name);
  }

  await app.listen(3000);
}
bootstrap();
