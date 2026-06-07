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
      include: { gobernador: true }
    });

    if (!provincia) throw new Error('Provincia no encontrada');

    // 1. Factores de Riesgo (Negativos)
    const corrupcion = provincia.gobernador?.nivelCorrupcion ?? 0; // 0-100
    const conflictos = provincia.conflictosInternos ?? 0; // Escala 1-10

    // 2. Factores de Estabilidad (Positivos)
    const lealtad = provincia.lealtad ?? 50; // 0-100
    const legiones = provincia.legiones ?? 0; // Cantidad de legiones

    // Algoritmo Ponderado:
    // El riesgo base sube con corrupción y conflictos
    // El riesgo baja con lealtad y presencia militar (legiones)
    const factorNegativo = (corrupcion * 0.6) + (conflictos * 10);
    const factorPositivo = (lealtad * 0.4) + (legiones * 15);
    
    // Cálculo del riesgo final (0 a 100)
    const riesgo = Math.max(0, Math.min(100, factorNegativo - factorPositivo + 50));

    // Si hay rebelión (ej. riesgo > 60)
    if (riesgo > 60) {
      // Consecuencias:
      const bajas = Math.floor(legiones * 0.2); // 20% de bajas
      const perdidaLealtad = 15;
      
      const informeRebelion = {
        provincia: provincia.nombre,
        nivelRiesgo: riesgo,
        fecha: new Date(),
        gobernador: provincia.gobernador?.nombre ?? 'Sin gobernador',
        estado: 'Sofocada' // Aquí podrías implementar lógica de azar para ver si se sofoca
      };

      // Guardar en SQL y Mongo
      await this.prisma.rebelion.create({ data: informeRebelion });
      await new this.rebelionModel({ ...informeRebelion, tipoSimulacion: 'Rebelion' }).save();

      // Notificar al Senado
      this.websocketsService.notificarSenado({
        mensaje: "¡REBELIÓN DETECTADA!",
        detalles: informeRebelion,
        consecuencias: { bajas, perdidaLealtad }
      });
      
      return { riesgo, rebelion: true, consecuencias: { bajas, perdidaLealtad } };
    }

    return { riesgo, rebelion: false };
  }
}