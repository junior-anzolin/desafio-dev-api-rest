import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '@services/common/database/database.module';
import { Account } from '@services/common/database/entities/account';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { PeopleOperationModule } from '@services/common/people-operation/people-operation.module';
import { TransactionOperationModule } from '@services/common/transaction-operation/transaction-operation.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Account]),
    PeopleOperationModule,
    TransactionOperationModule,
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
