import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class PeopleEntity {
  @PrimaryGeneratedColumn('uuid')
  idPessoa: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @Column({ type: 'timestamp' })
  cpdataNascimentof: Date;
}
