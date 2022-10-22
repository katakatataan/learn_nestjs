import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor() {}

  findAll() {
    return [{ name: 'user' }, { name: 'sample' }];
  }
}
