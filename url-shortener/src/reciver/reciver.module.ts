import { Module, Global } from '@nestjs/common';
import { ReciverController } from './reciver.controller';
import { ReciverService } from './reciver.service';
import { CodeModule } from 'src/code/code.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Global()
@Module({
  imports: [CodeModule, PrismaModule],
  controllers: [ReciverController],
  providers: [ReciverService],
  exports: [ReciverService],
})
export class ReciverModule {}
