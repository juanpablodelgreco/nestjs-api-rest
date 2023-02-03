import { CreateCarRequest } from 'src/interfaces/request/cars/CreateCarRequest';
import { Car } from 'src/models/Car';
import { GetAllCarsQuery } from '../../request/cars/GetAllCarsQuery';

export const CAR_SERVICE = 'ICarService';

export interface CarService {
  getAll(filters: GetAllCarsQuery): Promise<Car[]>;
  create(request: CreateCarRequest): Promise<Car>;
}
