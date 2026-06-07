import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rebelion } from './schemas/rebelion.schema';
import { WebsocketsService } from '../websockets/websockets.service';

@Injectable()
export class RebelionService {
  constructor(
    private prisma: PrismaService,
    @InjectModel(Rebelion.name) private rebelionModel: Model<Rebelion>,
    private readonly websocketsService: WebsocketsService
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

    
    if (riesgo > 60) {
      const bajas = numLegiones > 0 ? Math.max(1, Math.floor(numLegiones * 0.3)) : 0;
      
      await this.prisma.provincia.update({
        where: { id: provinciaId },
        data: {
          lealtad: Math.max(0, lealtad - 20),
          conflictosInternos: conflictos + 2
        }
      });

      if (legionesDisponibles.length > 0) {
        await this.prisma.legion.update({
          where: { id: legionesDisponibles[0].id },
          data: { estado: 'DESCANSO' }
        });
      }

      const datosInforme = {
        provincia: provincia.nombre,
        nivelRiesgo: parseFloat(riesgo.toFixed(2)),
        fecha: new Date(),
        gobernador: provincia.gobernador?.nombre ?? 'Sin gobernador',
        estado: 'Detectada'
      };

      await this.prisma.rebelion.create({ data: datosInforme });

      await new this.rebelionModel({
        provincia: datosInforme.provincia,
        nivelRiesgo: datosInforme.nivelRiesgo,
        fecha: datosInforme.fecha,
        gobernador: datosInforme.gobernador,
        estado: datosInforme.estado,
        tipoSimulacion: 'Rebelion'
      }).save();

      this.websocketsService.notificarSenado({
        ...datosInforme,
        bajas,
        mensaje: "¡La provincia se ha alzado en armas!"
      });
      
      return { ...datosInforme, rebelion: true, bajas };
    }

    return { riesgo: parseFloat(riesgo.toFixed(2)), rebelion: false };
  }
}