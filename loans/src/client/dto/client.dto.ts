import { IsString, IsInt, IsNumber } from 'class-validator';

export class RequestClientDto {
  @IsInt()
  age: number;

  @IsString()
  cpf: string;

  @IsString()
  name: string;

  @IsNumber()
  income: number;

  @IsString()
  location: string;
}
