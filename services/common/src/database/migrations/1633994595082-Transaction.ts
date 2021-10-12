import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Transaction1633994595082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(
      new Table({
        name: 'Transaction',
        columns: [
          {
            name: 'idTransacao',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            isUnique: true,
          },
          {
            name: 'idConta',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'money',
            isNullable: false,
            default: 0,
          },
          {
            name: 'dataTransacao',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'Transaction',
      new TableForeignKey({
        name: 'fk_account_idConta',
        columnNames: ['idConta'],
        referencedColumnNames: ['idConta'],
        referencedTableName: 'Account',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Transaction', true, true);
  }
}
