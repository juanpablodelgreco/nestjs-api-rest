import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarControllerImpl } from './controllers/CarControllerImp';
import { ConfigModule } from '@nestjs/config';
import { Car, CarSchema } from './models/Car';

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
  controllers: [AppController, CarControllerImpl],
  providers: [AppService],
})
export class AppModule {}
