import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { Transaction } from '../database/entities/transaction';
import { TransactionOperationService } from './transaction-operation.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Transaction])],
  providers: [TransactionOperationService],
  exports: [TransactionOperationService],
})
export class TransactionOperationModule {}
