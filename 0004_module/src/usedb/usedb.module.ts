import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { UseDbController } from './usedb.controller';
import { UsedbRepository } from './usedb.service';

@Module({
  // imports: [DatabaseModule],
  providers: [UsedbRepository],
  controllers: [UseDbController],
  exports: [UsedbRepository],
})
export class UseDbModule {}
