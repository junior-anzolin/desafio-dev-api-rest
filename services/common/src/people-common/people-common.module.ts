import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { People } from '../database/entities/people';
import { PeopleCommonService } from './people-common.service';

@Module({
  providers: [PeopleCommonService],
  exports: [PeopleCommonService],
  imports: [DatabaseModule, TypeOrmModule.forFeature([People])],
})
export class PeopleCommonModule {}
