import { Body, Controller, Post, Inject, HttpCode } from '@nestjs/common';
import { RegisterUserRequest } from 'src/interfaces/request/auth/RegisterUserRequest';
import { ApiTags } from '@nestjs/swagger';
import { AuthService, AUTH_SERVICE } from 'src/interfaces/services/AuthService';
import { User } from 'src/models/User';
import { LoginUserRequest } from 'src/interfaces/request/auth/LoginUserRequest';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: AuthService,
  ) {}

  @Post('register')
  @HttpCode(HttpCodesEnum.OK)
  async registerUser(
    @Body() registerUserRequest: RegisterUserRequest,
  ): Promise<User> {
    return this.authService.create(registerUserRequest);
  }

  @Post('login')
  @HttpCode(HttpCodesEnum.OK)
  async login(@Body() loginUserRequest: LoginUserRequest): Promise<object> {
    return this.authService.login(loginUserRequest);
  }
}
