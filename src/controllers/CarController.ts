import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Query,
  Param,
} from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { HttpCodesEnum } from 'src/enums/HttpCodesEnum';
import { CreateCarRequest } from 'src/interfaces/request/cars/CreateCarRequest';
import { GetAllCarsQuery } from 'src/interfaces/request/cars/GetAllCarsQuery';
import { UpdateCarRequest } from 'src/interfaces/request/cars/UpdateCarRequest';
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
  getAll(@Query() filters: GetAllCarsQuery): Promise<Car[]> {
    return this.carService.getAll(filters);
  }

  @Post()
  @HttpCode(HttpCodesEnum.CREATED)
  create(@Body() request: CreateCarRequest): Promise<Car> {
    return this.carService.create(request);
  }

  @Patch(':uuid')
  @HttpCode(HttpCodesEnum.OK)
  update(
    @Param('uuid', ParseMongoIdPipe)
    uuid: string,
    @Body() request: UpdateCarRequest,
  ): Promise<Car> {
    return this.carService.update(uuid, request);
  }
}
