import { HttpException } from '@nestjs/common';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super(
      `Invalid credentials.`,
      HttpCodesEnum.UNAUTHORIZED,
    );
  }
}
