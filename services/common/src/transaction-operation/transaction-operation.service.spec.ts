import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from '../database/entities/transaction';
import { TransactionOperationService } from './transaction-operation.service';

describe('TransactionOperationService', () => {
  let service: TransactionOperationService;
  const idContaTest: string = 'c6c6982a-8907-4b34-8084-c8f1c8bf402d';
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

    where(query: any) {
      if (query?.idConta !== idContaTest)
        return {
          getRawOne: () => ({ sum: null }),
        };
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
        idConta: idContaTest,
        valor: 1000,
      }),
    ).toMatchObject(transactionTest);
  });

  it('checkLimitWithdraw should to match value', async () => {
    expect(await service.checkLimitWithdraw(10, 5, idContaTest)).toEqual(true);
  });

  it('checkLimitWithdraw should to throw max day', async () => {
    try {
      await service.checkLimitWithdraw(1, 5, '');
      throw {};
    } catch (err) {
      expect(err?.response).toBe(
        'O valor de saque ultrapassa o valor máximo do dia',
      );
    }
  });

  it('checkLimitWithdraw should to throw except limit', async () => {
    try {
      await service.checkLimitWithdraw(5, 1, idContaTest);
      throw {};
    } catch (err) {
      expect(err?.response).toBe('Limite de saque diário excedido');
    }
  });
});
