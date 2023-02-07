import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserRequest {
  @ApiProperty({
    type: String,
    example: 'test@test.com',
    required: true,
  })
  @IsString()
  @IsEmail()
  @Transform((email) => email.value.toLowerCase())
  @Transform((email) => email.value.trim())
  email: string;

  @ApiProperty({
    type: String,
    example: 'TestPrueba99',
    required: true,
  })
  @IsString()
  @MinLength(7)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
}
