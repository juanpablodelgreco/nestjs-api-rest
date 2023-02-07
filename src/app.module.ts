import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './controllers/CarController';
import { ConfigModule } from '@nestjs/config';
import { Car, CarSchema } from './models/Car';
import { CAR_REPOSITORY } from './interfaces/repositories/CarRepository';
import { CarRepositoryImp } from './repositories/CarRepositoryImp';
import { CAR_SERVICE } from './interfaces/services/CarService';
import { CarServiceImp } from './services/CarServiceImp';
import { getEnvironmentVariable } from './utils/ConfigHelper';
import { ParseMongoIdPipe } from './pipes/ParseMongoIdPipe';
import { User, UserSchema } from './models/User';
import { AuthController } from './controllers/AuthController';
import { AUTH_SERVICE } from './interfaces/services/AuthService';
import { AuthServiceImp } from './services/AuthServiceImp';
import { UserRepositoryImp } from './repositories/UserRepositoryImp';
import { USER_REPOSITORY } from './interfaces/repositories/UserRepository';
import { ENCRYPT_MANAGER } from './interfaces/helpers/EncryptManager';
import { EncryptManagerImp } from './helpers/EncryptManagerImp';
import { JwtService } from '@nestjs/jwt/dist';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.local', isGlobal: true }),
    MongooseModule.forRoot(getEnvironmentVariable('DATABASE_URL')),
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AuthController, CarController],
  providers: [
    { provide: CAR_REPOSITORY, useClass: CarRepositoryImp },
    { provide: USER_REPOSITORY, useClass: UserRepositoryImp },
    { provide: CAR_SERVICE, useClass: CarServiceImp },
    { provide: AUTH_SERVICE, useClass: AuthServiceImp },
    { provide: ENCRYPT_MANAGER, useClass: EncryptManagerImp },
    ParseMongoIdPipe,
    JwtService,
  ],
})
export class AppModule {}