import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { AccountType } from '../enums/account-type';

export class AccountValidator {
  @IsNotEmpty()
  @IsString()
  idPessoa: string;

  @IsOptional()
  @IsNumber()
  saldo?: number;

  @IsOptional()
  @IsNumber()
  limiteSaqueDiario: number;

  @IsOptional()
  @IsEnum(AccountType)
  tipoConta: string;
}
