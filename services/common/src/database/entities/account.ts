import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PeopleEntity } from './people';

export abstract class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  idConta: string;

  @ManyToOne(() => PeopleEntity)
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
