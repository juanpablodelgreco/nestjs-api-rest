import { Inject, Injectable } from '@nestjs/common';
import { EncryptManagerEnum } from 'src/enums/helpers/EncryptManagerEnum';
import { DuplicatedException } from 'src/errors/DuplicatedException';
import {
  EncryptManager,
  ENCRYPT_MANAGER,
} from 'src/interfaces/helpers/EncryptManager';
import {
  UserRepository,
  USER_REPOSITORY,
} from 'src/interfaces/repositories/UserRepository';
import { LoginUserRequest } from 'src/interfaces/request/auth/LoginUserRequest';
import { RegisterUserRequest } from 'src/interfaces/request/auth/RegisterUserRequest';
import { AuthService } from 'src/interfaces/services/AuthService';
import { User } from 'src/models/User';
import { JwtService } from '@nestjs/jwt';
import { getEnvironmentVariable } from 'src/utils/ConfigHelper';
import { InvalidCredentialsException } from 'src/errors/InvalidCredentialsException';

@Injectable()
export class AuthServiceImp implements AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly carRepository: UserRepository,
    @Inject(ENCRYPT_MANAGER) private readonly encryptManager: EncryptManager,
    private readonly jwtService: JwtService,
  ) {}

  async create(request: RegisterUserRequest): Promise<User> {
    const { email, password } = request;
    const user = await this.carRepository.getOne(email);
    if (user) throw new DuplicatedException(email);

    request.password = await this.encryptManager.hash(
      password,
      EncryptManagerEnum.SALT,
    );
    return this.carRepository.create(request);
  }

  update(uuid: string, request: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  delete(uuid: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async login({ email, password }: LoginUserRequest): Promise<object> {
    const user = await this.carRepository.getOne(email);
    if (!user) throw new InvalidCredentialsException();

    const isValidPassword = await this.encryptManager.verify(
      password,
      user.password,
    );
    if (!isValidPassword) throw new InvalidCredentialsException();

    const payload = { uuid: user._id };

    const jwt = this.jwtService.sign(payload, {
      secret: getEnvironmentVariable('JWT_SECRET'),
      expiresIn: '12h',
    });

    return { token: jwt };
  }
}
