import { Module } from '@nestjs/common';
import { AccountCommonService } from './account-common.service';

@Module({
  providers: [AccountCommonService]
})
export class AccountCommonModule {}
