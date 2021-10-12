import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Account1633993145392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(
      new Table({
        name: 'Account',
        columns: [
          {
            name: 'idConta',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            isUnique: true,
          },
          {
            name: 'idPessoa',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'saldo',
            type: 'decimal(12,2)',
            isNullable: false,
            default: 0,
          },
          {
            name: 'limiteSaqueDiario',
            type: 'decimal(12,2)',
            isNullable: false,
            default: 1000,
          },
          {
            name: 'flagAtivo',
            type: 'boolean',
            isNullable: false,
            default: true,
          },
          {
            name: 'tipoConta',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'dataCriacao',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'Account',
      new TableForeignKey({
        name: 'fk_people_idPessoa',
        columnNames: ['idPessoa'],
        referencedColumnNames: ['idPessoa'],
        referencedTableName: 'People',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Account', true, true);
  }
}
