import { Connection, Sample1Provider } from './../db/db.module';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsedbRepository {
  constructor(
    @Inject(Sample1Provider)
    private db: Connection,
  ) {}

  public async save() {
    console.log(this.db.hello())
  }
}
