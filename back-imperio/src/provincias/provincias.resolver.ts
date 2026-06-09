import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ProvinciasService } from './provincias.service';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';

@Resolver('Provincia')
export class ProvinciasResolver {
  constructor(
    private readonly provinciasService: ProvinciasService,
    private readonly prisma: PrismaService
  ) {}

  @Query('provincias')
  findAll() {
    return this.provinciasService.findAll();
  }

  @Query('provincia')
  findOne(@Args('id') id: number) {
    return this.provinciasService.findOne(id);
  }

  @Query('gobernadoresLibres')
  async getGobernadoresLibres() {
    return this.provinciasService.findGobernadoresLibres();
  }

  @Mutation('createProvincia')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Senado')
  create(@Args('input') input: any) { 
    return this.provinciasService.create(input);
  }

  @Mutation('updateProvincia')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Senado')
  update(@Args('id') id: number, @Args('input') input: any) {
    return this.provinciasService.update(id, input);
  }

  @Mutation('removeProvincia')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Senado')
  remove(@Args('id') id: number) {
    return this.provinciasService.remove(id);
  }
}