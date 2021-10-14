import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Account } from '@services/common/database/entities/account';
import { PeopleOperationService } from '@services/common/people-operation/people-operation.service';
import { TransactionOperationService } from '@services/common/transaction-operation/transaction-operation.service';
import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  const idContaTestSemSaldo = 'a3fa8032-f675-48c0-b1d7-875568b16a69';
  const idContaTestComSaldo = '70bd64e4-38f0-4ca7-8b31-323f9f86d6c8';
  const contaTest = {
    idPessoa: '24c8912f-3840-4438-8691-ee9290ddd949',
    saldo: 100,
    limiteSaqueDiario: 1000,
    flagAtivo: true,
    tipoConta: 'CONTA_CORRENTE',
    dataCriacao: '2021-10-14T14:55:16.191Z',
    idConta: idContaTestComSaldo,
  };

  class MockAccount {
    findOne(idConta: string) {
      if (idConta === idContaTestComSaldo) return { ...contaTest, idConta };
      else return { ...contaTest, saldo: 0 };
    }
    save(_entity: Account) {
      return contaTest;
    }
  }
  class MockPeopleOperationService {
    get(idPessoa: string) {
      return { idPessoa };
    }
  }
  class MockTransactionOperationService {
    create(data: any) {
      return {};
    }

    checkLimitWithdraw(limit: number, value: number) {
      return true;
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        { provide: getRepositoryToken(Account), useValue: new MockAccount() },
        {
          provide: PeopleOperationService,
          useValue: new MockPeopleOperationService(),
        },
        {
          provide: TransactionOperationService,
          useValue: new MockTransactionOperationService(),
        },
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get should to match object', async () => {
    expect(await service.get(idContaTestComSaldo)).toMatchObject(contaTest);
  });

  it('balance should to match object', async () => {
    expect(await service.balance(idContaTestComSaldo)).toMatchObject({
      saldo: contaTest.saldo,
    });
  });

  it('create should to match object', async () => {
    expect(
      await service.create({
        idPessoa: '24c8912f-3840-4438-8691-ee9290ddd949',
        limiteSaqueDiario: 10000,
        tipoConta: 'CONTA_CORRENTE',
      }),
    ).toMatchObject(contaTest);
  });

  it('deposit should to match object', async () => {
    expect(await service.deposit(idContaTestComSaldo, 10)).toMatchObject(
      contaTest,
    );
  });

  it('withdraw should to match object', async () => {
    expect(await service.withdraw(idContaTestComSaldo, 10)).toMatchObject(
      contaTest,
    );
  });

  it('block should to match object', async () => {
    expect(await service.block(idContaTestSemSaldo)).toMatchObject(contaTest);
  });
});
