import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { LoanModule } from 'src/loan/loan.module';

@Module({
  imports: [LoanModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
