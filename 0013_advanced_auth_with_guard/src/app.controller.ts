import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserEntity } from './common/user';
import { User } from './common/user.decorator';
import { AppService, AppService2 } from './app.service';
import { ValidationPipe } from './common/validation.pipe';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly app2: AppService2,
    private readonly authService: AuthService
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(req): Promise<string> {
    console.log(req)
    return this.authService.hello()
    // return this.appService.all();
  }
  @Get('/secd')
  async two() {
    return this.authService.hello()
  }

  @Post()
  async findOne(@User(new ValidationPipe()) user: UserEntity) {
    console.log(user);
    return user;
  }
}
