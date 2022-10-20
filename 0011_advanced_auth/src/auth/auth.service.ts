import { UserRepository } from './../user/user.service';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtTokenService } from "src/jwt/jwtToken.service";

@Injectable()
export class AuthService {
  constructor(private readonly jwtTokenService: JwtTokenService, private readonly userRepository: UserRepository) {}

  hello(){
    console.log(this.userRepository.findAll())
    return this.jwtTokenService.hello()
  }
}