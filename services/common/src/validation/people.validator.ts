import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { isValidCPF } from '../util/is-valid-cpf';

export class PeopleValidator {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @isValidCPF()
  cpf: string;

  @IsNotEmpty()
  @IsDateString()
  dataNascimento: string;
}
