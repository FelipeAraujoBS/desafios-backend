import { Module, Global } from '@nestjs/common';
import { PoisController } from './pois.controller';
import { PoisService } from './pois.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GeoProxModule } from 'src/geoProx/geoProx.module';

@Module({
  imports: [PrismaModule, GeoProxModule],
  controllers: [PoisController],
  providers: [PoisService],
})
export class PoisModule {}
