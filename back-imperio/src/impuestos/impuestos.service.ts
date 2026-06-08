import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Informe } from '../informes/schemas/informe.schema';
import { WebsocketsService } from '../websockets/websockets.service';

@Injectable()
export class ImpuestosService {
  constructor(
    private prisma: PrismaService,
    @InjectModel(Informe.name) private informeModel: Model<Informe>,
    private readonly websocketsService: WebsocketsService
  ) {}

  async calcularRecaudacion(provinciaId: number) {
    
    const provincia = await this.prisma.provincia.findUnique({
      where: { id: provinciaId },
      include: { gobernador: true } 
    });

    if (!provincia) throw new NotFoundException('Provincia no encontrada');

    
    const baseRecaudacion = provincia.impuestos ?? 1000; // Valor base de recaudacion, puede ser un campo en la base de datos o un valor fijo
    const prosperidad = provincia.prosperidadEconomica ?? 0; // Cada punto de prosperidad aumenta un 1%
    
    // Accedemos a la corrupción a través del gobernador asignado
    const corrupcion = provincia.gobernador?.nivelCorrupcion ?? 0; // Si no hay gobernador, la corrupcion es 0
    const conflictos = provincia.conflictosInternos ?? 0; // Cada conflicto reduce un 10%

    // Algoritmo:
    // La prosperidad aumenta (1 + p/100)
    // La corrupción reduce (1 - c/100)
    // Los conflictos reducen (1 - conf * 0.1)
    const factorProsperidad = 1 + (prosperidad / 100);
    const factorCorrupcion = Math.max(0, 1 - (corrupcion / 100));
    const factorConflictos = Math.max(0.1, 1 - (conflictos * 0.02)); // Cada conflicto reduce un 2%, con un mínimo del 10% de reducción

    // Calculamos el total y aseguramos un mínimo de recaudación del 10% de la base
    const recaudacionBaseMinima = baseRecaudacion * 0.1;
    const total = baseRecaudacion * factorProsperidad * factorCorrupcion * factorConflictos;
    const recaudacionFinal = Math.max(recaudacionBaseMinima, total);

    const informeData = {
      provincia: provincia.nombre,
      gobernador: provincia.gobernador?.nombre ?? 'Sin gobernador',
      recaudacionFinal: recaudacionFinal.toFixed(2),
      fecha: new Date()
    };

    // Guardado en SQL
    await this.prisma.informe.create({ data: informeData });

    // Guardado en MongoDB
    await new this.informeModel({ ...informeData, tipoSimulacion: 'Impuestos' }).save();

    
    this.websocketsService.notificarSenado(informeData);

    return informeData;
  }
}