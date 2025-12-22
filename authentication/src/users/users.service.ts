import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;

    return await this.prisma.user.create({
      data: {
        username,
        password,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
