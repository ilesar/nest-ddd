import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtGuard extends AuthGuard(['jwt', 'jwt-local']) {
  canActivate(context: ExecutionContext): boolean {
    return <boolean>super.canActivate(context);
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err, user): any {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
