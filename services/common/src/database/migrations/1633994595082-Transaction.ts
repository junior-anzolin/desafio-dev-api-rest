import { MigrationInterface, QueryRunner } from 'typeorm';

export class Transaction1633994595082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS pgcrypto;
            CREATE TABLE IF NOT EXISTS transaction (
                idTransacao UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
                idConta UUID NOT NULL,
                valor MONEY NOT NULL,
                dataTransacao TIMESTAMP NOT NULL DEFAULT now()
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF NOT EXISTS transaction');
  }
}
