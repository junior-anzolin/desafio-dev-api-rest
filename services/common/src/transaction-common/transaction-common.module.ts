import { Module } from '@nestjs/common';
import { TransactionCommonService } from './transaction-common.service';

@Module({
  providers: [TransactionCommonService]
})
export class TransactionCommonModule {}
