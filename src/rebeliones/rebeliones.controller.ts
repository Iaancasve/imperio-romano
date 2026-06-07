import { Controller, Post, Param, ParseIntPipe } from '@nestjs/common';
import { RebelionService } from './rebeliones.service';

@Controller('rebeliones')
export class RebelionesController {
  constructor(private readonly rebelionService: RebelionService) {}

  // Endpoint para disparar la verificación de riesgo manualmente
  @Post('verificar/:provinciaId')
  async verificarRiesgo(@Param('provinciaId', ParseIntPipe) provinciaId: number) {
    return await this.rebelionService.verificarRiesgoRebelion(provinciaId);
  }
}