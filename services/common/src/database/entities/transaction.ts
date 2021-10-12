import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Account } from './account';

@Entity('Transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  idTransacao: string;

  @ManyToOne(() => Account)
  @JoinColumn()
  idConta: string;

  @Column({ type: 'money', default: 0 })
  valor: number;

  @Column({ type: 'timestamp' })
  dataTransacao: Date;
}
