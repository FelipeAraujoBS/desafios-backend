import { Module, Global } from '@nestjs/common';
import { CreateCode } from './code.service';

@Global()
@Module({
  providers: [CreateCode],
  exports: [CreateCode],
})
export class CodeModule {}
