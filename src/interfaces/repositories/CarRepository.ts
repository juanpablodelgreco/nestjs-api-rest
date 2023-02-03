import { Car } from 'src/models/Car';
import { GetAllCarsQuery } from '../request/cars/GetAllCarsQuery';

export const CAR_REPOSITORY = 'ICarRepository';

export interface CarRepository {
  getAll(filters: GetAllCarsQuery): Promise<Car[]>;
}
