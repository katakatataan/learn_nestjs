import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

export class JwtAuthGuard extends AuthGuard('my-auth') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  asynccanActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<any> {
    console.log(context)
    // const isPublic = this.reflector.get<boolean>(
    //   IS_PUBLIC_KEY,
    //   context.getHandler(),
    // );

    // if (isPublic) {
    //   return true;
    // }
    return true

    return super.canActivate(context);
  }
}
