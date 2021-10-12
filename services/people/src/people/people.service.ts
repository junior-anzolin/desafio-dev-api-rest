import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from '@services/common/database/entities/people';
import { PeopleValidator } from '@services/common/validation/people.validator';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly __people: Repository<People>,
  ) {}
  async get(idPessoa: string) {
    const people = await this.__people.findOne(idPessoa);
    if (!people) throw new HttpException('Pessoa não encontrada', 400);

    return people;
  }

  async create(data: PeopleValidator) {
    return await this.__people.save(new People(data));
  }

  async edit(idPessoa: string, data: PeopleValidator) {
    const people = await this.get(idPessoa);
    const { nome, cpf, dataNascimento } = data;

    people.nome = nome;
    people.cpf = cpf;
    people.dataNascimento = dataNascimento;

    return await this.__people.save(people);
  }

  async delete(idPessoa: string) {
    const people = await this.get(idPessoa);
    await this.__people.delete(people.idPessoa);

    return { message: 'Sucesso' };
  }
}
