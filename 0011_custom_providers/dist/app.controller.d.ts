import { UserEntity } from './common/user';
import { AppService, AppService2 } from './app.service';
import { DatabaseConnection } from './app.module';
export declare class AppController {
    private readonly appService;
    private readonly app2;
    private connection;
    constructor(appService: AppService, app2: AppService2, connection: DatabaseConnection);
    findAll(): Promise<string[]>;
    two(): Promise<string[]>;
    third(): Promise<string>;
    findOne(user: UserEntity): Promise<UserEntity>;
}
