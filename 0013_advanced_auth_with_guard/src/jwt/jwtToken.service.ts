import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtTokenService {
  constructor(private readonly jwtService: JwtService) {}

  hello(){
    return this.jwtService.sign("hello")
  }
}