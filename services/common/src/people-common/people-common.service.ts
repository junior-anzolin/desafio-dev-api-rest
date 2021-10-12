import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from '../database/entities/people';
import { PeopleValidator } from '../validation/people.validator';

@Injectable()
export class PeopleCommonService {
  constructor(
    @InjectRepository(People)
    private readonly __people: Repository<People>,
  ) {}

  get(idPessoa: string) {
    return this.__people.findOne(idPessoa);
  }

  create(data: PeopleValidator) {
    return this.__people.save(new People(data));
  }

  edit(data: People) {
    return this.__people.save(data);
  }

  delete(idPessoa: string) {
    return this.__people.delete(idPessoa);
  }
}
