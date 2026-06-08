import { Injectable } from '@nestjs/common';
import { WebsocketsGateway } from './websockets.gateway';

@Injectable()
export class WebsocketsService {
  constructor(private readonly gateway: WebsocketsGateway) {}

  notificarSenado(data: any) {
    this.gateway.server.to('senado').emit('recaudacionRealizada', data);
  }
}