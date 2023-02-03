import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvironmentVariable } from './utils/ConfigHelper';
import { HttpExceptionFilter } from './utils/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  const port = getEnvironmentVariable('APP_PORT') || 3000;

  app.setGlobalPrefix('ms-car-rest/api/v1.0');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port, () => console.log(`App listening on port ${port}`));
}
bootstrap();
