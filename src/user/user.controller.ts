import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { users } from '@prisma/client';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { uploadDto } from './dto/uploadDto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('user') // đặt tên nhóm api hiển thị trong Swagger
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @ApiConsumes('multipart/form-data') // tạo nút chọn file trên swagger
  @ApiBody({
    type: uploadDto, // đặt type cho body nếu muốn dùng request
  })
  @UseInterceptors(
    // chạy middleware
    FilesInterceptor('avatar', 10, {
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        // process.cwd: đưa đường dẫn ra ngoài cùng
        filename: (req, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname),
      }),
    }),
  )
  @Post('/upload')
  upload(@UploadedFiles() file: Express.Multer.File[]) {
    // Dùng fs viết giảm số lượng px của hình
    return file;
  }

  // hai thằng dưới này luôn đi chung với nhau
  @ApiBearerAuth() // định nghĩa khoá ở ngoài swagger
  @UseGuards(AuthGuard('jwt')) // khoá API những cái nó nằm trên
  @Get()
  findAll(@Req() req: Request): Promise<users[]> {
    // viết theo typeScript thì thêm Promise
    let data = req.user; // Khoá hệ thống nhiều chức năng
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/search/:uName')
  findName(@Param('uName') uName) {
    return this.userService.findName(uName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
