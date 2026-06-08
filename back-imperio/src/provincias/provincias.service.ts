import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProvinciasService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.provincia.findMany();
  }

  findOne(id: number) {
    return this.prisma.provincia.findUnique({ where: { id } });
  }

  create(data: any) {
    return this.prisma.provincia.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.provincia.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.provincia.delete({ where: { id } });
  }
}