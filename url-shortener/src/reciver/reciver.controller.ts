import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReciverDto } from './dto/reciver.dto';
import { ReciverService } from './reciver.service';

@Controller('url')
export class ReciverController {
  constructor(private readonly reciverService: ReciverService) {}

  @Post()
  async reciverUrl(@Body() reciverDto: ReciverDto) {
    return await this.reciverService.ReciveUrl(reciverDto);
  }

  @Get(':shortCode')
  async getByShortCode(@Param('shortCode') shortCode: any) {
    return this.reciverService.findByShortCode(shortCode);
  }
}
