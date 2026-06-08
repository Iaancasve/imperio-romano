import { Controller, Post, Param, UseGuards, Req, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ImpuestosService } from './impuestos.service';
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('impuestos')
export class ImpuestosController {
  constructor(
    private readonly impuestosService: ImpuestosService,
    private readonly prisma: PrismaService
  ) {}

  @Post('calcular/:provinciaId')
  @UseGuards(JwtAuthGuard)
  async calcular(@Param('provinciaId') provinciaId: string, @Req() req: any) {
  const user = req.user; 
  const id = Number(provinciaId);

  const provincia = await this.prisma.provincia.findUnique({
    where: { id },
    include: { gobernador: true }
  });

  if (!provincia) throw new NotFoundException('Provincia no encontrada');

  const esSenado = user.rol === 'Senado'; 
  const esGobernador = provincia.gobernador?.id === user.id;

  if (!esSenado && !esGobernador) {
    throw new ForbiddenException('No tienes permiso');
  }

  return await this.impuestosService.calcularRecaudacion(id);
}
}