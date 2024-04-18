import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login() {
    // create token
    let token = this.jwtService.signAsync(
      { data: { userId: 1 } },
      { expiresIn: '10m', secret: 'BI_MAT' },
    );
    return token;
  }

  signup() {
    return 'success';
  }
}

// yarn add @nestjs/config
// yarn add @nestjs/passport passport passport-local
// yarn add @nestjs/jwt passport-jwt
// yarn add -D @types/passport-jwt
