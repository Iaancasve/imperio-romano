import { Exclude } from 'class-transformer';

export class UsuarioEntity {
  id!: number;
  nombre!: string;

  @Exclude()
  contrasena!: string;

  
  constructor(partial: Partial<UsuarioEntity>) {
    Object.assign(this, partial);
  }
}