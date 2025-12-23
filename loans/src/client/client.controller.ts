import { Controller, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { RequestClientDto } from './dto/client.dto';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('loan')
  clientRequest(@Body() requestClientDto: RequestClientDto) {
    return this.clientService.dealClientRequest(requestClientDto);
  }
}
