import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { getEnvironmentVariable } from './utils/ConfigHelper';
import { HttpExceptionFilter } from './utils/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  const port = getEnvironmentVariable('APP_PORT') || 3000;

  app.setGlobalPrefix('ms-car-rest/api/v1.0');
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Cars rest api')
    .setDescription('This is a car rest api.')
    .setVersion('1.0')
    .addTag('cars')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('ms-car-rest/api/docs', app, document);

  await app.listen(port, () => console.log(`App listening on port ${port}`));
}
bootstrap();
