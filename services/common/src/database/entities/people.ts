import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PeopleValidator } from '../../validation/people.validator';

@Entity('People')
export class People {
  constructor(data?: PeopleValidator) {
    this.nome = data?.nome;
    this.cpf = data?.cpf;
    this.dataNascimento = data?.dataNascimento;
  }

  @PrimaryGeneratedColumn('uuid')
  idPessoa: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @Column({ type: 'timestamp' })
  dataNascimento: string;
}
