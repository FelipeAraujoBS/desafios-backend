import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreatePoisDto } from './dto/pois.dto';
import { DeliveryCords } from './dto/cords.dto';
import { PoisService } from './pois.service';

@Controller('pois')
export class PoisController {
  constructor(private readonly poisService: PoisService) {}

  @Post()
  async createPoi(@Body() createPoisDto: CreatePoisDto) {
    return await this.poisService.createPois(createPoisDto);
  }

  @Get()
  async getAllPoi() {
    return await this.poisService.getAllPois();
  }

  @Post('cords')
  async postDeliveryCords(@Body() deliveryCords: DeliveryCords) {
    return this.poisService.dealWithCord(deliveryCords);
  }
}
