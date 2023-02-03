import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationRequest {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit = 10;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset = 0;
}