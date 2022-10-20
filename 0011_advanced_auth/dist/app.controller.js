"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("./common/user");
const user_decorator_1 = require("./common/user.decorator");
const app_service_1 = require("./app.service");
const validation_pipe_1 = require("./common/validation.pipe");
const jwtprovider_service_1 = require("./jwt/jwtprovider.service");
let AppController = class AppController {
    constructor(appService, app2, authService) {
        this.appService = appService;
        this.app2 = app2;
        this.authService = authService;
    }
    async findAll() {
        return this.authService.hello();
    }
    async two() {
        return this.app2.all();
    }
    async findOne(user) {
        console.log(user);
        return user;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/secd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "two", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOne", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        app_service_1.AppService2,
        jwtprovider_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map