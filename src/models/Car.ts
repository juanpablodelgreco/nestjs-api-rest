import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GasEnum } from 'src/enums/cars/GasEnum';

@Schema({ timestamps: true })
export class Car extends Document {
  @Prop({
    type: String,
    required: true,
  })
  brand: string;

  @Prop({
    type: String,
    required: true,
  })
  model: string;

  @Prop({
    type: Number,
    required: true,
  })
  year: number;

  @Prop({
    type: String,
    required: true,
  })
  color: string;

  @Prop({
    enum: GasEnum,
    required: true,
  })
  gas: GasEnum;

  @Prop({
    type: Number,
    required: true,
  })
  price: number;

  @Prop({
    type: Boolean,
    required: false,
    default: true,
  })
  enabled: boolean;
}
export const CarSchema = SchemaFactory.createForClass(Car);
