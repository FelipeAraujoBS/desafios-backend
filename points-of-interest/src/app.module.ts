import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PoisModule } from './POIs/pois.module';
import { PrismaModule } from './prisma/prisma.module';
import { GeoProxModule } from './geoProx/geoProx.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PoisModule,
    PrismaModule,
    GeoProxModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
