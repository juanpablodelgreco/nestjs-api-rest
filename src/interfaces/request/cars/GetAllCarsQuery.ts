import { ApiProperty } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';
import { GasEnum } from 'src/enums/cars/GasEnum';
import { PaginationRequest } from '../shared/PaginationRequest';

export class GetAllCarsQuery extends PaginationRequest {
  @ApiProperty({ type: String, example: 'ford', required: false })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  brand?: string;

  @ApiProperty({ type: String, example: 'focus', required: false })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  model?: string;

  @ApiProperty({ type: Number, example: 2020, required: false })
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  year?: number;

  @ApiProperty({ type: String, example: 'green', required: false })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  color?: string;

  @ApiProperty({
    type: String,
    example: 'ETY',
    enum: [GasEnum.ELECTRICITY, GasEnum.HYBRID, GasEnum.NAPHTHA],
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(GasEnum)
  gas?: GasEnum;
}
