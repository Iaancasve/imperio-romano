import { Exclude } from 'class-transformer';

export class UsuarioEntity {
  id!: number;
  nombre!: string;

  @Exclude()
  contrasena!: string;

  // Añade esto exactamente así:
  constructor(partial: Partial<UsuarioEntity>) {
    Object.assign(this, partial);
  }
}