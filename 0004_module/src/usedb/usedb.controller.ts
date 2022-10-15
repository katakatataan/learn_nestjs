import { Controller, Get, Inject, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsedbRepository } from './usedb.service';

@Controller('cats')
export class UseDbController {
  constructor(
    private repository: UsedbRepository,
  ) {}
  @Get()
  findAll(@Req() request: Request): string {
    this.repository.save()
    return 'This action returns all cats';
  }
}