import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '@services/common/database/database.module';
import { People } from '@services/common/database/entities/people';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
