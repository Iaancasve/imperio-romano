import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'informes' })
export class Informe extends Document {
  @Prop({ required: true })
  provincia!: string;

  @Prop({ required: true })
  gobernador!: string; 

  @Prop({ required: true })
  recaudacionFinal!: string;

  @Prop({ required: true })
  fecha!: Date;

  @Prop({ required: true })
  tipoSimulacion!: string;
}

export const InformeSchema = SchemaFactory.createForClass(Informe);