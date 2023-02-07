import { User } from 'src/models/User';
import { RegisterUserRequest } from '../request/auth/RegisterUserRequest';

export const USER_REPOSITORY = 'IUserRepository';

export interface UserRepository {
  getAll(filters: any): Promise<User[]>;
  create(request: RegisterUserRequest): Promise<User>;
  getOne(filters: any): Promise<User>;
  update(user: User, request: any): Promise<User>;
  delete(user: User): Promise<void>;
}
