import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NewTransactionValidator {
  @IsNotEmpty()
  @IsString()
  idConta: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
