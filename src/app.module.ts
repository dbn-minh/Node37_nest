import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
// constructor(){} // Nhận giá trị từ bên ngoài
// // Thuộc tính => Properties
// private id = 0;
// // Phương thức => Method
// // Từ khoá dẫn xuất
// public func = () => {}
// protected a = ""

// Đối tượng

// Decorator: @ABC
// Cách khai báo decorator: anotion

// module: kết nối serivce và controller lại với nhau của chính đối tượng đó, kết nối module của đối tượng khác

//prisma
// B1: yarn add prisma @prisma/client
// B2: yarn prisma init
// B3: vào .env sửa lại chuỗi kết nối CSDL, và file schema.prisma
// B4: yarn prisma db pull
// B5: yarn prisma generate
