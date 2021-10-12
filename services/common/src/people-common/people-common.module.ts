import { Module } from '@nestjs/common';
import { PeopleCommonService } from './people-common.service';

@Module({
  providers: [PeopleCommonService]
})
export class PeopleCommonModule {}
