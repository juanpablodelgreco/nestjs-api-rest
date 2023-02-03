import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';
import { CreateCarRequest } from 'src/interfaces/request/cars/CreateCarRequest';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import {
  CarService,
  CAR_SERVICE,
} from 'src/interfaces/services/cars/CarService';
import { Car } from 'src/models/Car';

@Controller('cars')
export class CarController {
  constructor(@Inject(CAR_SERVICE) private readonly carService: CarService) {}

  @Get()
  @HttpCode(HttpCodesEnum.OK)
  getAll(@Query() filters: GetAllCarsQuery): Promise<Car[]> {
    return this.carService.getAll(filters);
  }

  @Post()
  @HttpCode(HttpCodesEnum.CREATED)
  create(@Body() request: CreateCarRequest): Promise<Car> {
    return this.carService.create(request);
  }
}
