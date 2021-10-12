import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from '@services/common/database/entities/people';
import { PeopleOperationService } from '@services/common/people-operation/people-operation.service';
import { RemoveMaskCPF } from '@services/common/util/remove-mask-cpf';
import { PeopleValidator } from '@services/common/validation/people.validator';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly __people: Repository<People>,

    private readonly peopleOperationService: PeopleOperationService,
  ) {}

  async get(idPessoa: string) {
    return await this.peopleOperationService.get(idPessoa);
  }

  async create(data: PeopleValidator) {
    const cpf = RemoveMaskCPF(data.cpf);
    const peopleWithCpf = await this.__people.findOne({ where: { cpf: cpf } });

    if (peopleWithCpf)
      throw new HttpException(
        'Já existe uma pessoa com esse CPF cadastrado',
        400,
      );

    return await this.__people.save(new People({ ...data, cpf }));
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
