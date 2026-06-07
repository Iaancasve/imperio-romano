import { Module } from '@nestjs/common';
import { RebelionService } from '../rebeliones/rebeliones.service';
import { PrismaModule } from '../prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Rebelion, RebelionSchema } from './schemas/rebelion.schema';
import { WebsocketsModule } from '../websockets/websockets.module';

@Module({
  imports: [
    PrismaModule,
    MongooseModule.forFeature([{ name: Rebelion.name, schema: RebelionSchema }]),
    WebsocketsModule,
  ],
  providers: [RebelionService],
  exports: [RebelionService],
})
export class RebelionesModule {}