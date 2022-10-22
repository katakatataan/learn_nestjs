import { AuthModule } from './auth/module';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService, AppService2 } from './app.service';

class MockClass extends AppService2 {
  all(){
    return ["asdfa"]
  }
  getHello(){
    return "hell"
  }

}

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useValue: {
        getHello: () => {
          return "hello"
        },
        all: () => {
          return ["hello", "saygoodby"]
        },
      },
    },
    {
      provide: AppService2,
      useClass: MockClass
    },
  ],
})
export class AppModule {}
