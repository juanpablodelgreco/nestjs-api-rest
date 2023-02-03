import { IsOptional } from 'class-validator';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { GasEnum } from 'src/enums/cars/GasEnum';
import { PaginationRequest } from '../shared/PaginationRequest';

export class GetAllCarsQuery extends PaginationRequest {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  model?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  year?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  color?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(GasEnum)
  gas?: GasEnum;
}
