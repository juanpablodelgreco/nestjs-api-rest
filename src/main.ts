import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 3000;

  app.setGlobalPrefix('ms-car-rest/api/v1.0');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(port, () => console.log(`App listening on port ${port}`));
}
bootstrap();
