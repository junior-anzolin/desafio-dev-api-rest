import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { People } from '@services/common/database/entities/people';
import { PeopleOperationService } from '@services/common/people-operation/people-operation.service';
import { PeopleValidator } from '@services/common/validation/people.validator';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;
  const idPessoaTest: string = 'a981ed16-a743-46b3-8b56-933802194742';
  const cpfExistente: string = '61906578001';
  const pessoaTest: PeopleValidator = {
    nome: 'Sophia Sônia Alice Castro',
    cpf: '49991309632',
    dataNascimento: '1970-01-01',
  };
  const pessoaValueTest: People = {
    ...pessoaTest,
    idPessoa: idPessoaTest,
  };

  class MockPeople {
    findOne(query: any) {
      if (query?.where?.cpf === cpfExistente)
        return { ...pessoaTest, cpf: cpfExistente };
      return null;
    }

    save(_pessoa: People) {
      return pessoaValueTest;
    }

    delete(idPessoa: string) {
      if (idPessoa === idPessoaTest) return pessoaValueTest;
      else throw {};
    }
  }
  class MockPeopleOperationService {
    get(idPessoa: string) {
      return { ...pessoaValueTest, idPessoa };
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PeopleService,
        { provide: getRepositoryToken(People), useValue: new MockPeople() },
        {
          provide: PeopleOperationService,
          useValue: new MockPeopleOperationService(),
        },
      ],
    }).compile();

    service = module.get<PeopleService>(PeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get should to match object', async () => {
    expect(await service.get(idPessoaTest)).toMatchObject(pessoaValueTest);
  });

  it('create should to match object', async () => {
    expect(await service.create(pessoaTest)).toMatchObject(pessoaValueTest);
  });

  it('create should to throw', async () => {
    try {
      await service.create({ ...pessoaTest, cpf: cpfExistente });
      throw {};
    } catch (err) {
      expect(err?.response).toBe(
        'Já existe uma pessoa com esse CPF cadastrado',
      );
    }
  });

  it('edit should to match object', async () => {
    expect(await service.edit(idPessoaTest, pessoaTest)).toMatchObject(
      pessoaValueTest,
    );
  });

  it('delete should to match object', async () => {
    expect(await service.delete(idPessoaTest)).toMatchObject({
      message: 'Sucesso',
    });
  });

  it('delete should to throw', async () => {
    try {
      await service.delete('');
      throw {};
    } catch (err) {
      expect(err?.response).toBe('Não foi possivel excluir essa pessoa');
    }
  });
});
