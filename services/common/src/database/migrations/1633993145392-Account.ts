import { MigrationInterface, QueryRunner } from 'typeorm';

export class Account1633993145392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS pgcrypto;
        CREATE TABLE IF NOT EXISTS account (
            idConta UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
            idPessoa UUID NOT NULL,
            saldo MONEY NOT NULL DEFAULT 0,
            limiteSaqueDiario MONEY NOT NULL DEFAULT 1000,
            flagAtivo BOOLEAN NOT NULL DEFAULT true,
            tipoConta INTEGER NOT NULL DEFAULT 1,
            dataCriacao TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT fk_idPessoa FOREIGN KEY (idPessoa) REFERENCES people (idPessoa)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF NOT EXISTS account');
  }
}
