import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  nombre: string;

  @Prop()
  precio: number;

  @Prop()
  descripcion: string;

  @Prop()
  imagen: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
