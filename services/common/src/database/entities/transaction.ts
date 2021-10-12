import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AccountEntity } from './account';

export abstract class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  idTransacao: string;

  @ManyToOne(() => AccountEntity)
  @JoinColumn()
  idConta: string;

  @Column({ type: 'money', default: 0 })
  valor: number;

  @Column({ type: 'timestamp' })
  dataTransacao: Date;
}
