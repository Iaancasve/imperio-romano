import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Informe extends Document {
  @Prop({ required: true })
  tipoSimulacion!: string; 

  @Prop({ required: true })
  provinciaNombre!: string;

  @Prop({ type: Object }) 
  resultados!: Record<string, any>;

  @Prop({ default: Date.now })
  fecha!: Date;
}

export const InformeSchema = SchemaFactory.createForClass(Informe);