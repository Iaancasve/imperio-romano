import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProvinciasService } from './provincias.service';

@Resolver('Provincia')
export class ProvinciasResolver {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Query('provincias')
  findAll() {
    return this.provinciasService.findAll();
  }

  @Query('provincia')
  findOne(@Args('id') id: number) {
    return this.provinciasService.findOne(id);
  }

  @Mutation('createProvincia')
  create(@Args() args: any) {
    return this.provinciasService.create(args);
  }

  @Mutation('updateProvincia')
  update(@Args('id') id: number, @Args() args: any) {
    return this.provinciasService.update(id, args);
  }

  @Mutation('removeProvincia')
  remove(@Args('id') id: number) {
    return this.provinciasService.remove(id);
  }
}