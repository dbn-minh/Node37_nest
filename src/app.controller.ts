import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

type DemoBody = {
  ma2: string;
  hoTen2: string;
};

@Controller('/app') //endpoint dành cho cấp đối tượng
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //endpoint dành cho cấp chức năng
  getHello(): string {
    return this.appService.getHello();
  }

  // trùng endpoint thì load thằng đầu tiên

  @Get('/demo/:email/:phone')
  getDemo(
    @Req() req: Request,

    // Nên sài cách dưới này
    @Query('id') id2: string,
    @Query('uName') uName2: string,
    @Param('email') email2: string,
    @Param('phone') phone2: string,
    @Body() body: DemoBody,
  ) {
    // request
    // - url:
    //    + query string
    let { id, uName } = req.query;
    //    + query param
    let { email, phone } = req.params;

    // - body
    let { ma, hoTen } = req.body;
    let { ma2, hoTen2 } = body;

    // response
    return { id2, uName2, email2, phone2, ma2, hoTen2 };
  }

  @Get('/tinh-tong/:soA/:soB')
  tinhTong(@Param('soA') soA, @Param('soB') soB) {
    // Tất cả dữ liệu nhập vào endpoint luôn là chuỗi
    return this.appService.tinhTong(soA, soB);
  }
  // Viêt API tính tổng 2 số nhận từ req.params
  // /tinh-tong/:soA/:soB
}
