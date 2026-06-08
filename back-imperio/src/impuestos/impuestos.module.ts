import { Module } from '@nestjs/common';
import { ImpuestosService } from './impuestos.service';
import { ImpuestosController } from './impuestos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Informe, InformeSchema } from '../informes/schemas/informe.schema';
import { WebsocketsModule } from '../websockets/websockets.module';

@Module({
  imports: [
    PrismaModule,
    MongooseModule.forFeature([{ name: Informe.name, schema: InformeSchema }]),
    WebsocketsModule, 
  ],
  controllers: [ImpuestosController],
  providers: [ImpuestosService],
})
export class ImpuestosModule {}