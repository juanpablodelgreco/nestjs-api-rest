import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorResponse } from 'src/interfaces/errors/ErrorResponse';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse<Response>();
    const request: Request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    let errors: string[] = (exception.getResponse() as ErrorResponse)?.message;

    if (!errors) errors = [exception.getResponse().toString()];

    response.status(status).json({
      statusCode: status,
      errors,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
