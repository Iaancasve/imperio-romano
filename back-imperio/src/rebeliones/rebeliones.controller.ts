import { Controller, Post, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { RebelionService } from './rebeliones.service';
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard';


@Controller('rebeliones')
@UseGuards(JwtAuthGuard)
export class RebelionesController {
  constructor(private readonly rebelionService: RebelionService) {}

  @Post('verificar/:provinciaId')
  async verificarRiesgo(@Param('provinciaId', ParseIntPipe) provinciaId: number) {
    return await this.rebelionService.verificarRiesgoRebelion(provinciaId);
  }
}
