import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleValidator } from '@services/common/validation/people.validator';

@Controller('')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get(':id')
  async get(@Param('id') idPessoa: string) {
    return await this.peopleService.get(idPessoa);
  }

  @Post('')
  async create(@Body() data: PeopleValidator) {
    return await this.peopleService.create(data);
  }

  @Put(':id')
  async edit(@Param('id') idPessoa: string, @Body() data: PeopleValidator) {
    return await this.peopleService.edit(idPessoa, data);
  }

  @Delete(':id')
  async delete(@Param('id') idPessoa: string) {
    return await this.peopleService.delete(idPessoa);
  }
}
