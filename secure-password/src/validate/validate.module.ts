import { Module } from '@nestjs/common';
import { ValidateService } from './validate.service';
import { ValidateController } from './validate.controller';

@Module({
  exports: [ValidateService],
  providers: [ValidateService],
  controllers: [ValidateController],
})
export class ValidateModule {}
