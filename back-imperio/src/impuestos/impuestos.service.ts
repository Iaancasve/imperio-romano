import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Informe } from '../informes/schemas/informe.schema';
import { WebsocketsGateway } from '../websockets/websockets.gateway'; 

@Injectable()
export class ImpuestosService {
  constructor(
    private prisma: PrismaService,
    @InjectModel(Informe.name) private informeModel: Model<Informe>,
    private readonly websocketsGateway: WebsocketsGateway 
  ) {}

  async calcularRecaudacion(provinciaId: number) {
    const provincia = await this.prisma.provincia.findUnique({
      where: { id: provinciaId },
      include: { gobernador: true } 
    });

    if (!provincia) throw new NotFoundException('Provincia no encontrada');

    const baseRecaudacion = provincia.impuestos ?? 1000;
    const prosperidad = provincia.prosperidadEconomica ?? 0;
    const corrupcion = provincia.gobernador?.nivelCorrupcion ?? 0;
    const conflictos = provincia.conflictosInternos ?? 0;

    const factorProsperidad = 1 + (prosperidad / 100);
    const factorCorrupcion = Math.max(0, 1 - (corrupcion / 100));
    const factorConflictos = Math.max(0.1, 1 - (conflictos * 0.02));

    const recaudacionBaseMinima = baseRecaudacion * 0.1;
    const total = baseRecaudacion * factorProsperidad * factorCorrupcion * factorConflictos;
    const recaudacionFinal = Math.max(recaudacionBaseMinima, total);

    const informeData = {
      provincia: provincia.nombre,
      gobernador: provincia.gobernador?.nombre ?? 'Sin gobernador',
      recaudacionFinal: recaudacionFinal.toFixed(2),
      fecha: new Date()
    };

    
    await this.prisma.informe.create({ data: informeData });
    await new this.informeModel({ ...informeData, tipoSimulacion: 'Impuestos' }).save();

    
    this.websocketsGateway.sendToAll('notificacion', {
        tipo: 'recaudacion',
        data: informeData
    });

    return informeData;
  }
}