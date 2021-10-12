import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class People1633993137810 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(
      new Table({
        name: 'People',
        columns: [
          {
            name: 'idPessoa',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            isUnique: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'dataNascimento',
            type: 'timestamp',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('People', true, true);
  }
}
