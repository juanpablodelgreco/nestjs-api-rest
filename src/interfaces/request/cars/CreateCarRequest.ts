import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { GasEnum } from 'src/enums/cars/GasEnum';

export class CreateCarRequest {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsEnum(GasEnum)
  @IsNotEmpty()
  gas: GasEnum;
}
