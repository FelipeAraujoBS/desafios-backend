import { Module, Global } from '@nestjs/common';
import { LoanService } from './loan.service';

@Global()
@Module({
  exports: [LoanService],
  providers: [LoanService],
})
export class LoanModule {}
