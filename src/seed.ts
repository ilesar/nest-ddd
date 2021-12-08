import { NestFactory } from '@nestjs/core';
import { TypeormSeederService } from '@shared/infrastructure/modules/database/seeder/typeorm-seeder.service';
import { DatabaseModule } from '@shared/infrastructure/modules/database/database.module';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(DatabaseModule);

  const seederService = appContext.get(TypeormSeederService);
  await seederService.seedDatabase();

  await appContext.close();
}

bootstrap();
