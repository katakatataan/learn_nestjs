import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService, AppService2, OptionsProvider } from './app.service';

class MockClass extends AppService2 {
  all(){
    return ["asdfa"]
  }
  getHello(){
    return "hell"
  }

}

export class DatabaseConnection  {
  options: {}
  constructor(options) {
    this.options = options
  }

  get(){
    return "this is connection"
  }

}

const connectionProvider = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider, optionalProvider?: string) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
  //       \_____________/            \__________________/
  //        This provider              The provider with this
  //        is mandatory.              token can resolve to `undefined`.
};


@Module({
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
    OptionsProvider,
    connectionProvider
  ],
})
export class AppModule {}
