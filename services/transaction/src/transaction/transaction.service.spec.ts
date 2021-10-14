import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from '@services/common/database/entities/transaction';
import { IPaginationDTO } from '@services/common/types/pagination';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  const idContaTest: string = 'f5fceca2-6054-43a9-8557-a425d6d6db37';
  const queryTest: IPaginationDTO = {
    max: 10,
    page: 0,
  };
  const resultExtractTest: any[] = [
    [
      {
        valor: '-100.00',
        dataTransacao: '2021-10-13T12:33:13.110Z',
        idTransacao: '4a04fdf3-9f3b-4121-85e7-8ae138825e9e',
      },
      {
        valor: '1000.00',
        dataTransacao: '2021-10-13T12:32:59.560Z',
        idTransacao: 'feb92e8d-8936-402a-b188-8715a8686662',
      },
    ],
    2,
  ];

  class MockTransaction {
    async findAndCount(_where: any) {
      return resultExtractTest;
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionService,
        {
          provide: getRepositoryToken(Transaction),
          useValue: new MockTransaction(),
        },
      ],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('extract should to match object', async () => {
    expect(await service.extract(idContaTest, queryTest)).toMatchObject(
      resultExtractTest,
    );
  });

  it('extract with filterDay should to match object', async () => {
    expect(
      await service.extract(idContaTest, {
        ...queryTest,
        filterDay: '2021-01-01',
      }),
    ).toMatchObject(resultExtractTest);
  });

  it('extract without query should to match object', async () => {
    expect(await service.extract(idContaTest, {})).toMatchObject(
      resultExtractTest,
    );
  });
});
