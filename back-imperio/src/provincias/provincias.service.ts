import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProvinciasService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.provincia.findMany({
      include: { gobernador: true }
    });
  }
  findOne(id: number) {
    return this.prisma.provincia.findUnique({
      where: { id },
      include: { gobernador: true }
    });
  }

  findGobernadoresLibres() {
    return this.prisma.gobernador.findMany({
      where: { provinciaId: null }
    });
  }

  create(data: any) {
    const { gobernadorId, ...rest } = data;
    return this.prisma.provincia.create({
      data: {
        ...rest,
        gobernador: gobernadorId ? { connect: { id: gobernadorId } } : undefined
      }
    });
  }

  update(id: number, data: any) {
    const { gobernadorId, ...rest } = data;

    return this.prisma.provincia.update({
      where: { id },
      data: {
        ...rest,
        gobernador: gobernadorId
          ? { connect: { id: gobernadorId } }
          : { disconnect: true }
      }
    });
  }

  remove(id: number) {
    return this.prisma.provincia.delete({ where: { id } });
  }
}