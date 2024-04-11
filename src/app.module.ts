import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(){} // Nhận giá trị từ bên ngoài  
  // // Thuộc tính => Properties
  // private id = 0;
  // // Phương thức => Method
  // // Từ khoá dẫn xuất
  // public func = () => {}
  // protected a = ""
}

// Đối tượng

// Decorator: @ABC
// Cách khai báo decorator: anotion

// module: kết nối serivce và controller lại với nhau của chính đối tượng đó, kết nối module của đối tượng khác