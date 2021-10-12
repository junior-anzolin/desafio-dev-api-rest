import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountType } from '../../enums/account-type';
import { AccountValidator } from '../../validation/account.validator';
import { People } from './people';

@Entity('Account')
export class Account {
  constructor(data?: AccountValidator) {
    this.idPessoa = data?.idPessoa;
    this.saldo = data?.saldo;
    this.limiteSaqueDiario = data?.limiteSaqueDiario;
    this.flagAtivo = true;
    this.tipoConta = data?.tipoConta ?? AccountType.CONTA_CORRENTE;
    this.dataCriacao = new Date();
  }

  @PrimaryGeneratedColumn('uuid')
  idConta: string;

  @ManyToOne(() => People)
  @JoinColumn({ name: 'idPessoa' })
  idPessoa: string;

  @Column({ type: 'decimal', default: 0 })
  saldo: number;

  @Column({ type: 'decimal', default: 1000 })
  limiteSaqueDiario: number;

  @Column({ type: 'boolean', default: true })
  flagAtivo: boolean;

  @Column({ type: 'varchar', default: AccountType.CONTA_CORRENTE })
  tipoConta: AccountType;

  @Column({ type: 'timestamp' })
  dataCriacao: Date;
}
