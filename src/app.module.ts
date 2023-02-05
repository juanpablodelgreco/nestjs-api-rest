import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './controllers/CarController';
import { ConfigModule } from '@nestjs/config';
import { Car, CarSchema } from './models/Car';
import { CAR_REPOSITORY } from './interfaces/repositories/CarRepository';
import { CarRepositoryImp } from './repositories/CarRepositoryImp';
import { CAR_SERVICE } from './interfaces/services/cars/CarService';
import { CarServiceImp } from './services/CarServiceImp';
import { getEnvironmentVariable } from './utils/ConfigHelper';
import { ParseMongoIdPipe } from './pipes/ParseMongoIdPipe';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.local', isGlobal: true }),
    MongooseModule.forRoot(getEnvironmentVariable('DATABASE_URL')),
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
  controllers: [CarController],
  providers: [
    { provide: CAR_REPOSITORY, useClass: CarRepositoryImp },
    { provide: CAR_SERVICE, useClass: CarServiceImp },
    ParseMongoIdPipe,
  ],
})
export class AppModule {}
