import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Informe } from './schemas/informe.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InformesService {
  constructor(
    private prisma: PrismaService,
    @InjectModel(Informe.name) private informeModel: Model<Informe> 
  ) {}

  async guardarInforme(data: any) {
    await this.prisma.informe.create({ data });
    const informeMongo = new this.informeModel(data);
    await informeMongo.save();
  }
}