import { Car } from 'src/models/Car';
import { GetAllCarsQuery } from '../../request/cars/GetAllCarsQuery';

export const CAR_SERVICE = 'ICarService';

export interface CarService {
  getAll(filters: GetAllCarsQuery): Promise<Car[]>;
}
