import { PartialType } from '@nestjs/swagger';
import { CreateCarRequest } from './CreateCarRequest';

export class UpdateCarRequest extends PartialType(CreateCarRequest) {}
