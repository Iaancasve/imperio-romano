import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';

@Controller('usuarios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @Roles('Senado')
  create(@Body() body: any) { return this.usuariosService.create(body); }

  @Get()
  @Roles('Senado')
  findAll() { return this.usuariosService.findAll(); }

  @Get(':id')
  @Roles('Senado')
  findOne(@Param('id') id: string) { return this.usuariosService.findOne(+id); }

  @Patch(':id')
  @Roles('Senado')
  update(@Param('id') id: string, @Body() body: any) { return this.usuariosService.update(+id, body); }

  @Delete(':id')
  @Roles('Senado')
  remove(@Param('id') id: string) { return this.usuariosService.remove(+id); }
}