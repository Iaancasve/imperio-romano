import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'rebeliones' })
export class Rebelion extends Document {
  @Prop({ required: true })
  provincia!: string;

  @Prop({ required: true })
  nivelRiesgo!: number;

  @Prop({ required: true })
  fecha!: Date;

  @Prop({ required: true })
  gobernador!: string;

  @Prop({ required: true })
  tipoSimulacion!: string; 
}

export const RebelionSchema = SchemaFactory.createForClass(Rebelion);