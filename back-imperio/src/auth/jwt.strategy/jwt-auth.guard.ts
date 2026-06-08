import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    async validate(payload: any) {
  return { id: payload.sub, rol: payload.roles[0] }; 
}
}