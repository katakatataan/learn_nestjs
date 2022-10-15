import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/db.module';
import { UseDbModule } from './usedb/usedb.module';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    UseDbModule,
  ],
})
export class AppModule {}
