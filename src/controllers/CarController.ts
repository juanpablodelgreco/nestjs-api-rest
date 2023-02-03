import { Controller, Get, Inject, Query } from '@nestjs/common';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import {
  CarService,
  CAR_SERVICE,
} from 'src/interfaces/services/cars/CarService';

@Controller('cars')
export class CarController {
  constructor(@Inject(CAR_SERVICE) private readonly carService: CarService) {}

  @Get()
  getAll(@Query() filters: GetAllCarsQuery): any {
    return this.carService.getAll(filters);
  }
}
