import { HttpException } from '@nestjs/common';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';

export class NotFoundException extends HttpException {
  constructor(fields: string) {
    super(`Not found entity with values [${fields}]`, HttpCodesEnum.NOT_FOUND);
  }
}
