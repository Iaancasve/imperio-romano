import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nombre: string, contrasena: string }) {
    const hashedPassword = await bcrypt.hash(data.contrasena, 10);
    return this.prisma.usuario.create({
      data: { nombre: data.nombre, contrasena: hashedPassword }
    });
  }

  findAll() {
    return this.prisma.usuario.findMany({ include: { rolesAsignados: { include: { rol: true } } } });
  }

  async findOne(id: number) {
    const user = await this.prisma.usuario.findUnique({ where: { id }, include: { rolesAsignados: { include: { rol: true } } } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async update(id: number, data: { nombre?: string, contrasena?: string }) {
    if (data.contrasena) {
      data.contrasena = await bcrypt.hash(data.contrasena, 10);
    }
    return this.prisma.usuario.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}