import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEntityDto } from './dto/entity.dto';

@Injectable()
export class EntityService {
  constructor(private prisma: PrismaService) {}

  async createEntity(createEntityDto: CreateEntityDto) {
    const { userDocument, creditCardToken, value } = createEntityDto;

    return await this.prisma.entity.create({
      data: {
        userDocument,
        creditCardToken,
        value,
      },
    });
  }

  async findAll() {
    return this.prisma.entity.findMany();
  }

  async findAllEncrypted() {
    return this.prisma.withoutDecryption(() => this.prisma.entity.findMany());
  }
}
