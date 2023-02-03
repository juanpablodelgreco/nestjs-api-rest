import { Inject, Injectable } from '@nestjs/common';
import {
  CarRepository,
  CAR_REPOSITORY,
} from 'src/interfaces/repositories/CarRepository';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import { CarService } from 'src/interfaces/services/cars/CarService';
import { Car } from 'src/models/Car';

@Injectable()
export class CarServiceImp implements CarService {
  constructor(
    @Inject(CAR_REPOSITORY) private readonly carRepository: CarRepository,
  ) {}

  async getAll(filters: GetAllCarsQuery): Promise<Car[]> {
    return this.carRepository.getAll(filters);
  }
}
