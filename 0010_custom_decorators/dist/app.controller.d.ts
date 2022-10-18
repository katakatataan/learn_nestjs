import { UserEntity } from './common/user';
import { AppService, AppService2 } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly app2;
    constructor(appService: AppService, app2: AppService2);
    findAll(): Promise<string[]>;
    two(): Promise<string[]>;
    findOne(user: UserEntity): Promise<UserEntity>;
}
