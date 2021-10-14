import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from '../database/entities/transaction';
import { TransactionOperationService } from './transaction-operation.service';

describe('TransactionOperationService', () => {
  let service: TransactionOperationService;
  const transactionTest = {
    valor: '1000.00',
    dataTransacao: '2021-10-13T12:32:59.560Z',
    idTransacao: 'feb92e8d-8936-402a-b188-8715a8686662',
  };
  class MockTransaction {
    save(_data: Transaction) {
      return transactionTest;
    }

    createQueryBuilder(_string: string) {
      return new MockTransaction();
    }

    select(_string: string) {
      return new MockTransaction();
    }

    where(_where: any) {
      return new MockTransaction();
    }

    getRawOne() {
      return { sum: 5 };
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionOperationService,
        {
          provide: getRepositoryToken(Transaction),
          useValue: new MockTransaction(),
        },
      ],
    }).compile();

    service = module.get<TransactionOperationService>(
      TransactionOperationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('create transaction should to match object', async () => {
    expect(
      await service.create({
        idConta: 'c6b7f415-d7b3-48a2-a5d6-8cde77a67637',
        valor: 1000,
      }),
    ).toMatchObject(transactionTest);
  });
  it('checkLimitWithdraw should to match value', async () => {
    expect(await service.checkLimitWithdraw(10, 10)).toEqual(true);
  });
});
