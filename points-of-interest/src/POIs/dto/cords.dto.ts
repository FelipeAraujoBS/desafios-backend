import { IsInt, IsPositive } from 'class-validator';

export class DeliveryCords {
  @IsInt()
  @IsPositive()
  cordX: number;

  @IsInt()
  @IsPositive()
  cordY: number;

  @IsInt()
  @IsPositive()
  dMax: number;
}
