import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  all(): string[] {
    return ["hello"];
  }
}

@Injectable()
export class AppService2 {
  getHello(): string {
    return 'Hello World!';
  }
  all(): string[] {
    return ["hello"];
  }
}
