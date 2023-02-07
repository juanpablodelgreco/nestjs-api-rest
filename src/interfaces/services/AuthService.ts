import { LoginUserRequest } from 'src/interfaces/request/auth/LoginUserRequest';
import { RegisterUserRequest } from 'src/interfaces/request/auth/RegisterUserRequest';
import { User } from 'src/models/User';

export const AUTH_SERVICE = 'IAuthService';

export interface AuthService {
  create(request: RegisterUserRequest): Promise<User>;
  login(request: LoginUserRequest): Promise<object>;
  update(uuid: string, request: any): Promise<User>;
  delete(uuid: string): Promise<void>;
}
