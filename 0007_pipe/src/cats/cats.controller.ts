// import { JoiValidationPipe } from './../../common/joi-pipe';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { JoiValidationPipe } from '../../common/joi-pipe';
const Joi = require('joi');

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(
    @Body(
      new JoiValidationPipe(
        Joi.object({
          name: Joi.string().alphanum().min(3).max(30).required(),
        }),
      ),
    )
    createCatDto: CreateCatDto,
  ) {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
    return createCatDto;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log("asdfasf")
    return this.catsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log("hello")
    return this.catsService.findOne(id);
  }
  @Get('2/:id')
  async findOne2(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
