import { IsOptional, IsUUID } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetOneRequest {
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  _id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  model: string;
}
