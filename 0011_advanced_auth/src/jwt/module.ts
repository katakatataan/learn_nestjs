import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './jwtprovider.service';

@Module({
  imports: [
    JwtModule.register({
      publicKey: `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXIs1iby+pUpLmxnk4imFbmicOWKV
RBAYRPOqPRFr/DjcHEXUQYW6cBTGMFieq9eiATSulIeMbQ49OsTdWg47Qg==
-----END PUBLIC KEY-----
      `,
      privateKey: `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIKmuaP40U5G3+L7JFnHq2XcDeJBjcg5PwRdVnTYCyr6/oAoGCCqGSM49
AwEHoUQDQgAEXIs1iby+pUpLmxnk4imFbmicOWKVRBAYRPOqPRFr/DjcHEXUQYW6
cBTGMFieq9eiATSulIeMbQ49OsTdWg47Qg==
-----END EC PRIVATE KEY-----"`
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
