import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
