import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NewTransactionValidator } from '../../validation/transaction.validator';
import { Account } from './account';

@Entity('Transaction')
export class Transaction {
  constructor(data?: NewTransactionValidator) {
    this.idConta = data?.idConta;
    this.valor = data?.valor;
    this.dataTransacao = new Date();
  }

  @PrimaryGeneratedColumn('uuid')
  idTransacao: string;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'idConta' })
  idConta: string;

  @Column({ type: 'decimal', default: 0 })
  valor: number;

  @Column({ type: 'timestamp' })
  dataTransacao: Date;
}
