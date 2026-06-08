import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Informe, InformeSchema } from './schemas/informe.schema';
import { InformesService } from './informes.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Informe.name, schema: InformeSchema }])],
  providers: [InformesService],
  exports: [InformesService],
})
export class InformesModule {}