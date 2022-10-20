import { UserEntity } from './common/user';
import { AppService, AppService2 } from './app.service';
import { AuthService } from './jwt/jwtprovider.service';
export declare class AppController {
    private readonly appService;
    private readonly app2;
    private readonly authService;
    constructor(appService: AppService, app2: AppService2, authService: AuthService);
    findAll(): Promise<string>;
    two(): Promise<string[]>;
    findOne(user: UserEntity): Promise<UserEntity>;
}
