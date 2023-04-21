import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';


export type BirdDocument = Bird & Document;

@Schema()
export class Bird {
  @Prop()
  name: string;

  @Prop()
  country: string;

  @Prop()
  number: number;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);