import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService) { }

    async create(createUsuarioDto: CreateUsuarioDto) {
        const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, 10);
        
        const usuario = await this.prisma.usuario.create({
            data: {
                nombre: createUsuarioDto.nombre,
                contrasena: hashedPassword,
                rolesAsignados: {
                    create: { rolId: createUsuarioDto.rolId }
                }
            }
        });
        
        return new UsuarioEntity(usuario); 
    }

    async findAll() {
        const usuarios = await this.prisma.usuario.findMany({ 
            include: { rolesAsignados: { include: { rol: true } } } 
        });
        return usuarios.map(u => new UsuarioEntity(u));
    }

    async findOne(id: number) {
        const user = await this.prisma.usuario.findUnique({ 
            where: { id }, 
            include: { rolesAsignados: { include: { rol: true } } } 
        });
        if (!user) throw new NotFoundException('Usuario no encontrado');
        return new UsuarioEntity(user);
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        const data: any = { ...updateUsuarioDto };
        
        if (updateUsuarioDto.contrasena) {
            data.contrasena = await bcrypt.hash(updateUsuarioDto.contrasena, 10);
        }

        try {
            const usuario = await this.prisma.usuario.update({
                where: { id },
                data,
            });
            return new UsuarioEntity(usuario);
        } catch (error: any) {
            if (error.code === 'P2025') { // Registro no encontrado
                throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
            }
            throw error;
        }
    }

    async remove(id: number) {
        try {
            const usuario = await this.prisma.usuario.delete({ where: { id } });
            return new UsuarioEntity(usuario);
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
            }
            throw error;
        }
    }
    
    
    async findOneByNombreForAuth(nombre: string) {
        return await this.prisma.usuario.findFirst({ 
        where: { nombre }, 
        include: { rolesAsignados: { include: { rol: true } } } 
        });
    }
}