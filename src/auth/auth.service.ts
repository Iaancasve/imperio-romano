import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(nombre: string, pass: string): Promise<any> {
    const user = await this.prisma.usuario.findFirst({ 
      where: { nombre },
      include: { rolesAsignados: { include: { rol: true } } }
    });

    if (user && await bcrypt.compare(pass, user.contrasena)) {
      const { contrasena, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const roles = user.rolesAsignados.map(r => r.rol.descripcion);
    const payload = { username: user.nombre, sub: user.id, roles };
    return { access_token: this.jwtService.sign(payload) };
  }
}