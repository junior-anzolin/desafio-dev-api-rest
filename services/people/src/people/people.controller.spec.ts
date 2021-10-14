import { Test, TestingModule } from '@nestjs/testing';
import { PeopleValidator } from '@services/common/validation/people.validator';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

describe('PeopleController', () => {
  let controller: PeopleController;
  const idPessoaTest: string = 'a981ed16-a743-46b3-8b56-933802194742';
  const pessoaTest: PeopleValidator = {
    nome: 'Sophia Sônia Alice Castro',
    cpf: '49991309632',
    dataNascimento: '1970-01-01',
  };

  class MockPeopleService {
    get(idPessoa: string) {
      return { idPessoa };
    }

    create(data: PeopleValidator) {
      return data;
    }

    edit(idPessoa: string, data: PeopleValidator) {
      return { idPessoa, data };
    }

    delete(idPessoa: string) {
      return { idPessoa };
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController],
      providers: [
        { provide: PeopleService, useValue: new MockPeopleService() },
      ],
    }).compile();

    controller = module.get<PeopleController>(PeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('get should to match object', async () => {
    expect(await controller.get(idPessoaTest)).toMatchObject({
      idPessoa: idPessoaTest,
    });
  });

  it('create should to match object', async () => {
    expect(await controller.create(pessoaTest)).toMatchObject(pessoaTest);
  });

  it('edit should to match object', async () => {
    expect(await controller.edit(idPessoaTest, pessoaTest)).toMatchObject({
      idPessoa: idPessoaTest,
      data: pessoaTest,
    });
  });

  it('delete should to match object', async () => {
    expect(await controller.delete(idPessoaTest)).toMatchObject({
      idPessoa: idPessoaTest,
    });
  });
});
