import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';
import { CreateCarRequest } from 'src/interfaces/request/cars/CreateCarRequest';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import { UpdateCarRequest } from 'src/interfaces/request/cars/UpdateCarRequest';
import { BaseResponse } from 'src/interfaces/responses/BaseResponse';
import {
  CarService,
  CAR_SERVICE,
} from 'src/interfaces/services/cars/CarService';
import { Car } from 'src/models/Car';
import { ParseMongoIdPipe } from 'src/pipes/ParseMongoIdPipe';

@ApiTags('Cars')
@Controller('cars')
export class CarController {
  constructor(@Inject(CAR_SERVICE) private readonly carService: CarService) {}

  @Get()
  @HttpCode(HttpCodesEnum.OK)
  async getAll(@Query() filters: GetAllCarsQuery): Promise<Car[]> {
    return this.carService.getAll(filters);
  }

  @Post()
  @HttpCode(HttpCodesEnum.CREATED)
  async create(@Body() request: CreateCarRequest): Promise<Car> {
    return this.carService.create(request);
  }

  @Patch(':uuid')
  @HttpCode(HttpCodesEnum.OK)
  async update(
    @Param('uuid', ParseMongoIdPipe)
    uuid: string,
    @Body() request: UpdateCarRequest,
  ): Promise<Car> {
    return this.carService.update(uuid, request);
  }

  @Delete(':uuid')
  @HttpCode(HttpCodesEnum.OK)
  async delete(
    @Param('uuid', ParseMongoIdPipe)
    uuid: string,
  ): Promise<BaseResponse> {
    await this.carService.delete(uuid);
    return new BaseResponse(`${uuid} was deleted.`);
  }
}
