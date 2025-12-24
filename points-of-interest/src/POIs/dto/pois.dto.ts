import { IsString, IsInt, IsPositive } from 'class-validator';

export class CreatePoisDto {
  @IsString()
  nomePoi: string;

  @IsInt()
  @IsPositive()
  cordX: number;

  @IsInt()
  @IsPositive()
  cordY: number;
}
