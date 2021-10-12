import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from '../database/entities/people';

@Injectable()
export class PeopleOperationService {
  constructor(
    @InjectRepository(People)
    private readonly __people: Repository<People>,
  ) {}

  async get(idPessoa: string) {
    const people = await this.__people.findOne(idPessoa);
    if (!people) throw new HttpException('Pessoa não encontrada', 400);

    return people;
  }
}
