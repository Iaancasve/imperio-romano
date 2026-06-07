import { IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre!: string; 

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  contrasena!: string;
}