import { IsOptional, IsUUID } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';
import { PaginationRequest } from '../shared/PaginationRequest';

export class GetOneRequest extends PaginationRequest {
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  model: string;
}
