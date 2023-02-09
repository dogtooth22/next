import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProyectoDocument = HydratedDocument<Proyecto>;

@Schema()
export class Proyecto {
  @Prop()
  codigo: string;

  @Prop()
  nombre: string;
}

export const ProyectoSchema = SchemaFactory.createForClass(Proyecto);