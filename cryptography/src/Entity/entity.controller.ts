import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { EntityService } from './entity.service';
import { CreateEntityDto } from './dto/entity.dto';

@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Post()
  create(@Body() createEntityDto: CreateEntityDto) {
    return this.entityService.createEntity(createEntityDto);
  }

  @Get()
  findAll() {
    return this.entityService.findAll();
  }

  @Get('encrypted')
  findAllEncrypted() {
    return this.entityService.findAllEncrypted();
  }
}
