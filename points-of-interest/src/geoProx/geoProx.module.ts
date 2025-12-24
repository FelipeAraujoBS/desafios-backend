import { Module, Global } from '@nestjs/common';
import { GeoProxService } from './geoProx.service';

@Global()
@Module({
  exports: [GeoProxService],
  providers: [GeoProxService],
})
export class GeoProxModule {}
