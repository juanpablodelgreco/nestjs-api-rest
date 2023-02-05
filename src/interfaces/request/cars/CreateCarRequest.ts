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
  @ApiProperty({ type: String, example: 'ford', required: true })
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  brand: string;

  @ApiProperty({ type: String, example: 'focus', required: true })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  model: string;

  @ApiProperty({ type: String, example: 'green', required: true })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  color: string;

  @ApiProperty({ type: Number, example: 2020, required: true })
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @IsNotEmpty()
  year: number;

  @ApiProperty({ type: Number, example: 1000.1, required: true })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: String,
    example: 'ETY',
    enum: [GasEnum.ELECTRICITY, GasEnum.HYBRID, GasEnum.NAPHTHA],
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(GasEnum)
  @Transform(({ value }) => value.toUpperCase())
  gas: GasEnum;
}
