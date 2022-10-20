import { UserModule } from './../user/module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MyJwtModule } from 'src/jwt/module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MyJwtModule,
    UserModule
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
