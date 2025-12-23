import { Injectable } from '@nestjs/common';

@Injectable()
export class LoanService {
  async loanRequirements(
    age: number,
    cpf: string,
    name: string,
    income: number,
    location: string,
  ) {
    const loansRequeriments = [
      { type: 'PERSONAL', interest_rate: 4 },
      { type: 'GUARANTEED', interest_rate: 3 },
      { type: 'CONSIGNMENT', interest_rate: 2 },
    ];

    if (
      income === 3000 ||
      (income >= 3000 && income < 5000 && age > 30 && location === 'SP')
    ) {
      return loansRequeriments[0]; // PERSONAL
    } else if (income >= 5000) {
      return loansRequeriments[1]; // GUARANTEED - estava [3]!
    } else if (income < 3000) {
      return loansRequeriments[2]; // CONSIGNMENT
    } else {
      return { message: 'Cliente não aprovado para emprestimo' };
    }
  }
}
