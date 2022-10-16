import { UserEntity } from './common/user';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findOne(user: UserEntity): Promise<UserEntity>;
}
