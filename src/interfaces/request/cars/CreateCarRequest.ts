import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GasEnum } from 'src/enums/cars/GasEnum';
import { Type, Transform } from 'class-transformer';

export class CreateCarRequest {
  @ApiProperty({ type: String, example: 'ford', required: false })
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  brand: string;

  @ApiProperty({ type: String, example: 'focus', required: false })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  model: string;

  @ApiProperty({ type: String, example: 'green', required: false })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  color: string;

  @ApiProperty({ type: Number, example: 2020, required: false })
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @IsNotEmpty()
  year: number;

  @ApiProperty({ type: Number, example: 1000.1, required: false })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: String,
    example: 'ETY',
    enum: [GasEnum.ELECTRICITY, GasEnum.HYBRID, GasEnum.NAPHTHA],
    required: false,
  })
  @IsNotEmpty()
  @IsEnum(GasEnum)
  @Transform(({ value }) => value.toUpperCase())
  gas: GasEnum;
}
