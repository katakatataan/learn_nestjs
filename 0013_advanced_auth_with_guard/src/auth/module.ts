import { UserModule } from './../user/module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MyJwtModule } from 'src/jwt/module';
import { AuthService } from './auth.service';
import { FirebaseAuthStrategy } from './strategy';

@Module({
  imports: [MyJwtModule, UserModule],
  providers: [AuthService, FirebaseAuthStrategy],
  exports: [AuthService],
})
export class AuthModule {}
