import { Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { UserEntity } from './common/user';
import { User } from './common/user.decorator';
import { AppService, AppService2 } from './app.service';
import { ValidationPipe } from './common/validation.pipe';
import { DatabaseConnection } from './app.module';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly app2: AppService2,
    @Inject("CONNECTION")
    private connection: DatabaseConnection,
  ) {}

  @Get()
  async findAll() {
    return this.appService.all();
  }
  @Get('/secd')
  async two() {
    return this.app2.all();
  }

  @Get('/third')
  async third() {
    return this.connection.get()
  }

  @Post()
  async findOne(@User(new ValidationPipe()) user: UserEntity) {
    console.log(user);
    return user;
  }
}
