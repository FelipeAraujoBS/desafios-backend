import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [ClientModule, LoanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
