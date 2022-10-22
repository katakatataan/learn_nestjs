import {
  ForbiddenException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

export const StrategyName = 'my-auth';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  StrategyName,
) {

  constructor() {
    super({
      jwtFromRequest: (req: Request) => {
        let jwt = null;
        console.log(req)

        // secretOeKeyで暗号化されたjwtを取得する。 内部で検証している
        return 'eyJhbGciOiJIUzI1NiJ9.aGVsbG8.Lrg00P-ap8KD8AP1amQFOf9TVqbRvr_lQZxtZjqt0oM';
      },
      ignoreExpiration: false,
      secretOrKey: `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIKmuaP40U5G3+L7JFnHq2XcDeJBjcg5PwRdVnTYCyr6/oAoGCCqGSM49
AwEHoUQDQgAEXIs1ibpUpLmxnk4imFbmicOWKVRBAYRPOqPRFr/DjcHEXUQYW6
cBTGMFieq9eiATSulIeMbQ49OsTdWg47Qg==
-----END EC PRIVATE KEY-----"`,
    });
  }

  async validate(jwtToken: string): Promise<any> {
    return { jwtToken };
  }
}
