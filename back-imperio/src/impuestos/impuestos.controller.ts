import { Controller, Post, Param, UseGuards } from '@nestjs/common';
import { ImpuestosService } from './impuestos.service';
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard';

@Controller('impuestos')
export class ImpuestosController {
  constructor(private readonly impuestosService: ImpuestosService) {}

  
  @UseGuards(JwtAuthGuard)
  @Post('calcular/:provinciaId')
  async calcular(@Param('provinciaId') provinciaId: string) {
    return await this.impuestosService.calcularRecaudacion(Number(provinciaId));
  }
}