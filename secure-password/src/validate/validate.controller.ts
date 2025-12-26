import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateValidationDto } from './dto/validate.dto';
import { ValidateService } from './validate.service';

@Controller('validate')
export class ValidateController {
  constructor(private readonly validateService: ValidateService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async createValidation(@Body() createValidationDto: CreateValidationDto) {
    return await this.validateService.PassValidation(createValidationDto);
  }
}
