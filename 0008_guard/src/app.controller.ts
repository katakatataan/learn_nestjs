import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'common/guard';
import { AppService } from './app.service';

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
