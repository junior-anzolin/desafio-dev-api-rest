import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { People } from '../database/entities/people';
import { PeopleOperationService } from './people-operation.service';

describe('PeopleOperationService', () => {
  let service: PeopleOperationService;
  const peopleTest = {
    nome: 'Sophia Sônia Alice Castro',
    cpf: '49991309632',
    dataNascimento: '1970-01-01T00:00:00.000Z',
    idPessoa: '62bdf6f1-63ae-42a4-8061-9724aef632e9',
  };
  class MockPeople {
    async findOne(idPessoa: string) {
      return idPessoa === peopleTest.idPessoa ? peopleTest : null;
    }
  }
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PeopleOperationService,
        { provide: getRepositoryToken(People), useValue: new MockPeople() },
      ],
    }).compile();

    service = module.get<PeopleOperationService>(PeopleOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('get people should to match object', async () => {
    expect(await service.get(peopleTest.idPessoa)).toMatchObject(peopleTest);
  });
});
