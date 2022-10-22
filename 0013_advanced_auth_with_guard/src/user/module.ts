import { UserRepository } from './user.service';
import { AuthModule } from './../auth/module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
  ],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UserModule {}
