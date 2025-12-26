import { Injectable } from '@nestjs/common';
import { ReciverDto } from './dto/reciver.dto';
import { CreateCode } from 'src/code/code.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReciverService {
  constructor(
    private readonly createCode: CreateCode,
    private readonly prismaService: PrismaService,
  ) {}

  async ReciveUrl(reciveDto: ReciverDto) {
    const shortCode = await this.createCode.generateRandomCode();

    const url = await this.prismaService.url.create({
      data: {
        originalUrl: reciveDto.url,
        shortCode,
      },
    });

    return {
      data: {
        originalUrl: url.originalUrl,
        shortCode: url.shortCode,
        shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
      },
    };
  }

  async findByShortCode(shortCode: string) {
    return await this.prismaService.url.findUnique({
      where: { shortCode },
    });
  }
}
