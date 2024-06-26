import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, users } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

  async findAll(): Promise<users[]> {
    // viết theo typeScript thì thêm Promise
    let data = await this.prisma.users.findMany(); // ko có await vẫn chạy được nha
    return data;
  }

  async findName(uName) {
    let data = await this.prisma.users.findMany({
      where: {
        full_name: {
          contains: uName,
        },
      },
    });
    return data;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
