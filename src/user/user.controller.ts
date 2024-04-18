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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { users } from '@prisma/client';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

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

  @Get()
  findAll(): Promise<users[]> {
    // viết theo typeScript thì thêm Promise
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
