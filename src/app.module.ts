import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './controllers/CarController';
import { ConfigModule } from '@nestjs/config';
import { Car, CarSchema } from './models/Car';
import { CAR_REPOSITORY } from './interfaces/repositories/CarRepository';
import { CarRepositoryImp } from './repositories/CarRepositoryImp';
import { CAR_SERVICE } from './interfaces/services/cars/CarService';
import { CarServiceImp } from './services/CarServiceImp';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://test:test@cluster0.3aj5mvv.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
  controllers: [AppController, CarController],
  providers: [
    AppService,
    { provide: CAR_REPOSITORY, useClass: CarRepositoryImp },
    { provide: CAR_SERVICE, useClass: CarServiceImp },
  ],
})
export class AppModule {}
