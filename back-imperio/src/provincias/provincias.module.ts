import { Module } from '@nestjs/common';
import { ProvinciasService } from './provincias.service';
import { ProvinciasResolver } from './provincias.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProvinciasService, ProvinciasResolver],
})
export class ProvinciasModule {}