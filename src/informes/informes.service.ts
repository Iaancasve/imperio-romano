import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Informe } from './schemas/informe.schema';

@Injectable()
export class InformesService {
  constructor(@InjectModel(Informe.name) private informeModel: Model<Informe>) {}

  async guardarInforme(tipo: string, provincia: string, datos: any) {
    const nuevoInforme = new this.informeModel({
      tipoSimulacion: tipo,
      provinciaNombre: provincia,
      resultados: datos,
    });
    return nuevoInforme.save();
  }
}