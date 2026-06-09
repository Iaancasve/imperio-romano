import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rebelion } from './schemas/rebelion.schema';
import { WebsocketsGateway } from '../websockets/websockets.gateway'; 

@Injectable()
export class RebelionService {
  constructor(
    private prisma: PrismaService,
    @InjectModel(Rebelion.name) private rebelionModel: Model<Rebelion>,
    private readonly websocketsGateway: WebsocketsGateway
  ) {}

  async verificarRiesgoRebelion(provinciaId: number) {
    const provincia = await this.prisma.provincia.findUnique({
      where: { id: provinciaId },
      include: { gobernador: true, legiones: true }
    });

    if (!provincia) throw new Error('Provincia no encontrada');

    const nivelCorrupcion = provincia.gobernador?.nivelCorrupcion ?? 0;
    const conflictos = provincia.conflictosInternos ?? 0;

    const legionesDisponibles = provincia.legiones.filter(
      (l) => l.estado === 'ACTIVA' || l.estado === 'DESCANSO'
    );

    const numLegiones = legionesDisponibles.length;
    const lealtad = (provincia as any).lealtad ?? 50;

    const factorDefensa = (lealtad * 0.3) + (numLegiones * 20);
    const factorAzar = Math.floor(Math.random() * 16);
    const riesgo = Math.max(0, Math.min(100, (nivelCorrupcion * 0.8) + (conflictos * 15) - factorDefensa + 40 + factorAzar));

    const datosInforme = {
        provincia: provincia.nombre,
        nivelRiesgo: parseFloat(riesgo.toFixed(2)),
        fecha: new Date(),
        gobernador: provincia.gobernador?.nombre ?? 'Sin gobernador',
        estado: 'Detectada',
        rebelion: false,
        bajas: 0
    };

    if (riesgo > 60 && legionesDisponibles.length > 0) {
      const legionesDestinadas = legionesDisponibles[0];
      const bajas = Math.floor(legionesDestinadas.numeroSoldados * 0.3);
      const nuevosSoldados = Math.max(0, legionesDestinadas.numeroSoldados - bajas);

      await this.prisma.$transaction([
        this.prisma.provincia.update({
          where: { id: provinciaId },
          data: {
            lealtad: Math.max(0, lealtad - 20),
            conflictosInternos: conflictos + 2
          }
        }),
        this.prisma.legion.update({
          where: { id: legionesDestinadas.id },
          data: { numeroSoldados: nuevosSoldados }
        })
      ]);

      datosInforme.rebelion = true;
      datosInforme.bajas = bajas;

      await this.prisma.rebelion.create({ 
          data: { 
              provincia: provincia.nombre,
              nivelRiesgo: datosInforme.nivelRiesgo,
              fecha: datosInforme.fecha,
              gobernador: datosInforme.gobernador,
              estado: datosInforme.estado
          } 
      });

      await new this.rebelionModel({
        provincia: datosInforme.provincia,
        nivelRiesgo: datosInforme.nivelRiesgo,
        fecha: datosInforme.fecha,
        gobernador: datosInforme.gobernador,
        estado: datosInforme.estado,
        tipoSimulacion: 'Rebelion'
      }).save();
    }

    
    this.websocketsGateway.sendToAll('notificacion', {
        tipo: 'rebelion',
        data: datosInforme
    });
    
    return datosInforme;
  }
}