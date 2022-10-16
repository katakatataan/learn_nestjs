import { Controller, Get, Post, UseGuards,} from '@nestjs/common';
import { UserEntity } from './common/user';
import { User } from './common/user.decorator';
import { AppService } from './app.service';
import { ValidationPipe } from './common/validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async findOne(@User(new ValidationPipe()) user: UserEntity) {
    console.log(user);
    return user
  }
}
