import { HttpException, Inject, Injectable } from '@nestjs/common';
import { DuplicatedException } from 'src/errors/DuplicatedException';
import {
  CarRepository,
  CAR_REPOSITORY,
} from 'src/interfaces/repositories/CarRepository';
import { CreateCarRequest } from 'src/interfaces/request/cars/CreateCarRequest';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import { GetOneRequest } from 'src/interfaces/request/cars/GetOneRequest';
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

  async create(request: CreateCarRequest): Promise<Car> {
    const { brand, model } = request;
    const car = await this.carRepository.getOne({
      brand,
      model,
    } as GetOneRequest);
    if (car) throw new DuplicatedException(`${brand}, ${model}`);

    return this.carRepository.create(request);
  }
}
