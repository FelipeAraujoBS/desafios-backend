import { Injectable } from '@nestjs/common';
import { RequestClientDto } from './dto/client.dto';
import { LoanService } from 'src/loan/loan.service';

@Injectable()
export class ClientService {
  constructor(private readonly loanService: LoanService) {}

  async dealClientRequest(requestClientDto: RequestClientDto) {
    const { age, cpf, name, income, location } = requestClientDto;

    const loanType = await this.loanService.loanRequirements(
      age,
      cpf,
      name,
      income,
      location,
    );

    return {
      costumer: name,
      loans: [loanType],
    };
  }
}
