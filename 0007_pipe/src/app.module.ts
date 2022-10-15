import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { AppService } from './app.service';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
