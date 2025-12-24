import { Injectable } from '@nestjs/common';
import { CreatePoisDto } from './dto/pois.dto';
import { DeliveryCords } from './dto/cords.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GeoProxService } from '../geoProx/geoProx.service';

@Injectable()
export class PoisService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly geoProxService: GeoProxService,
  ) {}

  async createPois(createPoisDto: CreatePoisDto) {
    const { nomePoi, cordX, cordY } = createPoisDto;

    return await this.prismaService.pOIs.create({
      data: {
        nomePoi,
        cordX,
        cordY,
      },
    });
  }

  async getAllPois() {
    return await this.prismaService.pOIs.findMany();
  }

  async dealWithCord(deliveryCords: DeliveryCords) {
    const allPois = await this.prismaService.pOIs.findMany({
      select: {
        nomePoi: true,
        cordX: true,
        cordY: true,
      },
    });

    const proximityPois = this.geoProxService.getProximityList(
      deliveryCords,
      allPois,
    );

    if (proximityPois.length === 0) {
      throw new Error('Não há POIs próximos');
    }

    return proximityPois;
  }
}
