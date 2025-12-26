import { IsString } from 'class-validator';

export class ReciverDto {
  @IsString()
  url: string;
}
