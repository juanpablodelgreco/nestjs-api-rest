import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PaginationRequest {
  @ApiProperty({ type: Number, example: 0, required: false, default: 0 })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit = 10;

  @ApiProperty({ type: Number, example: 0, required: false, default: 0 })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset = 0;
}
