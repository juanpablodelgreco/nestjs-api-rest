import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
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
  getAll(@Query() filters: GetAllCarsQuery): Promise<Car[]> {
    return this.carService.getAll(filters);
  }

  @Post()
  create(@Body() request: CreateCarRequest): Promise<Car> {
    return this.carService.create(request);
  }
}
