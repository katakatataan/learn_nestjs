import { Module, DynamicModule } from '@nestjs/common';

export class Connection {
  title
  setTitle(samle: string) {
    this.title= samle
  }
  hello() {
    console.log("hello", this.title);
  }
}

export const Sample1Provider = 'sample1';
export const Sample2Provider = 'sample2';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const entities = [
      { name: 'hello', providerName: Sample1Provider },
      { name: 'hello2', providerName: Sample2Provider },
    ];
    // const providers = createDatabaseProviders(options, entities);
    const providers = entities.map((item) => {
      return {
        provide: item.providerName,
        useFactory: () => {
          const conn = new Connection();
          conn.setTitle("safdsafsafd")
          return conn;
        },
        inject: [],
      };
    });
    return {
      global: true,
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    };
  }
}
