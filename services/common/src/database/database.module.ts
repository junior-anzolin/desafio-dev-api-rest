import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { enviroment } from '@services/common/environment/config';
import { Account } from './entities/account';
import { People } from './entities/people';
import { Transaction } from './entities/transaction';

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = enviroment;

console.log(POSTGRES_DATABASE);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DATABASE,
      logger: 'simple-console',
      migrations: ['./migrations/*.ts'],
      entities: [People, Account, Transaction],
      migrationsTableName: 'migration',
    }),
  ],
})
export class DatabaseModule {}
