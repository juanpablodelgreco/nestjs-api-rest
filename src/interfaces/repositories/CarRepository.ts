import { Car } from 'src/models/Car';
import { CreateCarRequest } from '../request/cars/CreateCarRequest';
import { GetAllCarsQuery } from '../request/cars/GetAllCarsQuery';
import { GetOneRequest } from '../request/cars/GetOneRequest';
import { UpdateCarRequest } from '../request/cars/UpdateCarRequest';

export const CAR_REPOSITORY = 'ICarRepository';

export interface CarRepository {
  getAll(filters: GetAllCarsQuery): Promise<Car[]>;
  create(request: CreateCarRequest): Promise<Car>;
  getOne(filters: GetOneRequest): Promise<Car>;
  update(car: Car, request: UpdateCarRequest): Promise<Car>;
  delete(car: Car): Promise<void>;
}
