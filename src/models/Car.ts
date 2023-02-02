import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GasEnum } from 'src/enums/cars/GasEnum';

@Schema()
export class Car extends Document {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  year: number;

  @Prop()
  color: string;

  @Prop({
    type: GasEnum,
  })
  gas: GasEnum;

  @Prop()
  price: number;

  @Prop()
  enabled: boolean;
}

export const CarSchema = SchemaFactory.createForClass(Car);
