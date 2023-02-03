import { CarRepository } from 'src/interfaces/repositories/CarRepository';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import { Car } from 'src/models/Car';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class CarRepositoryImp implements CarRepository {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

  async getAll(filters: GetAllCarsQuery): Promise<Car[]> {
    const { limit, offset } = filters;

    return this.carModel.find(filters).limit(limit).skip(offset);
  }
}
