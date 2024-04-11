import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Node37';
  }

  tinhTong(soA, soB) {
    return soA + soB; // Có thể dùng dấu + hoặc *1
  }
}
