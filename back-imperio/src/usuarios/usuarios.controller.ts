import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @Roles('Senado')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
  return this.usuariosService.create(createUsuarioDto);
}

  @Get()
  @Roles('Senado')
  findAll() { return this.usuariosService.findAll(); }

  @Get(':id')
  @Roles('Senado')
  findOne(@Param('id') id: string) { return this.usuariosService.findOne(+id); }

 @Patch(':id')
 @Roles('Senado')
 update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @Roles('Senado')
  remove(@Param('id') id: string) { return this.usuariosService.remove(+id); }
}