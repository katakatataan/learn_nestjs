"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwtprovider_service_1 = require("./jwtprovider.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                publicKey: `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXIs1iby+pUpLmxnk4imFbmicOWKV
RBAYRPOqPRFr/DjcHEXUQYW6cBTGMFieq9eiATSulIeMbQ49OsTdWg47Qg==
-----END PUBLIC KEY-----
      `,
                privateKey: `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIKmuaP40U5G3+L7JFnHq2XcDeJBjcg5PwRdVnTYCyr6/oAoGCCqGSM49
AwEHoUQDQgAEXIs1iby+pUpLmxnk4imFbmicOWKVRBAYRPOqPRFr/DjcHEXUQYW6
cBTGMFieq9eiATSulIeMbQ49OsTdWg47Qg==
-----END EC PRIVATE KEY-----"`
            }),
        ],
        providers: [jwtprovider_service_1.AuthService],
        exports: [jwtprovider_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=module.js.map