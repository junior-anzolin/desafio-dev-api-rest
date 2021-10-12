import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { People } from './people';

@Entity('Account')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  idConta: string;

  @ManyToOne(() => People)
  @JoinColumn()
  idPessoa: string;

  @Column({ type: 'money', default: 0 })
  saldo: number;

  @Column({ type: 'money', default: 1000 })
  limiteSaqueDiario: number;

  @Column({ type: 'boolean', default: true })
  flagAtivo: boolean;

  @Column({ type: 'integer' })
  tipoConta: number;

  @Column({ type: 'timestamp' })
  dataCriacao: Date;
}
