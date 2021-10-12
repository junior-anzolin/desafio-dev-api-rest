import { MigrationInterface, QueryRunner } from 'typeorm';

export class People1633993137810 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS pgcrypto;
        CREATE TABLE IF NOT EXISTS people (
            idPessoa UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
            nome VARCHAR(255) NOT NULL,
            cpf VARCHAR(11) NOT NULL,
            dataNascimento TIMESTAMP NOT NULL
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF NOT EXISTS people');
  }
}
