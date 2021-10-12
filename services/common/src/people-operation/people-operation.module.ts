import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { People } from '../database/entities/people';
import { PeopleOperationService } from './people-operation.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([People])],
  providers: [PeopleOperationService],
  exports: [PeopleOperationService],
})
export class PeopleOperationModule {}
