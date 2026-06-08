import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err, user, info, context: ExecutionContext) {
        return super.handleRequest(err, user, info, context);
    }
    getRequest(context: ExecutionContext) {
        return context.switchToHttp().getRequest();
    }
}