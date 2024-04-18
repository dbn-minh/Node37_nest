import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // swagger nhận bearer
      ignoreExpiration: false, // Ktra thời hạn sử dụng
      secretOrKey: 'BI_MAT', // link với khoá bí mật
    });
  }

  async validate(tokenDecode: any) {
    //
    return tokenDecode;
  }
}

// Bearer token
