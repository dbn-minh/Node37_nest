import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      /*Có thể khai báo khoá bí mật ở đây*/
    }),
  ],
  // nhớ import mới dùng được service
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
