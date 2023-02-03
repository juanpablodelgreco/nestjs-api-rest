import { CarRepository } from 'src/interfaces/repositories/CarRepository';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import { Car } from 'src/models/Car';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarRequest } from 'src/interfaces/request/cars/CreateCarRequest';
import { GetOneRequest } from 'src/interfaces/request/cars/GetOneRequest';

export class CarRepositoryImp implements CarRepository {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

  async getAll(filters: GetAllCarsQuery): Promise<Car[]> {
    const { limit, offset } = filters;
    return this.carModel
      .find({ ...filters, enabled: true })
      .limit(limit)
      .skip(offset);
  }

  async create(request: CreateCarRequest): Promise<Car> {
    return (await this.carModel.create(request)).save();
  }

  async getOne(filters: GetOneRequest): Promise<Car> {
    return this.carModel.findOne({ ...filters });
  }
}
