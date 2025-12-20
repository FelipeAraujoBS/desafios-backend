import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateEntityDto {
  @IsString()
  @IsNotEmpty()
  userDocument: string;

  @IsString()
  @IsNotEmpty()
  creditCardToken: string;

  @IsNumber()
  value: number;
}
