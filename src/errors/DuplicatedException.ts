import { HttpException } from '@nestjs/common';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';

export class DuplicatedException extends HttpException {
  constructor(fields: string) {
    super(
      `Duplicated entity with values [${fields}]`,
      HttpCodesEnum.BAD_REQUEST,
    );
  }
}
