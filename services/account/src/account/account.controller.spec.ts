import { Test, TestingModule } from '@nestjs/testing';
import { AccountType } from '@services/common/enums/account-type';
import { AccountValidator } from '@services/common/validation/account.validator';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

describe('AccountController', () => {
  let controller: AccountController;
  const idContaTest: string = '7004fef2-23c7-4b62-b035-c899cd5068a4';
  const valueTest: number = 10;
  const bodyTest: AccountValidator = {
    idPessoa: 'e2698bf7-b8a2-41af-8459-9d7b8c119551',
    saldo: valueTest,
    limiteSaqueDiario: valueTest,
    tipoConta: AccountType.CONTA_CORRENTE,
  };

  class MockAccountService {
    balance(idConta: string) {
      return { idConta };
    }
    create(data: AccountValidator) {
      return data;
    }
    deposit(idConta: string, value: number) {
      return { idConta, value };
    }
    withdraw(idConta: string, value: number) {
      return { idConta, value };
    }
    block(idConta: string) {
      return { idConta };
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        { provide: AccountService, useValue: new MockAccountService() },
      ],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('balance should to match object', async () => {
    expect(await controller.balance(idContaTest)).toMatchObject({
      idConta: idContaTest,
    });
  });

  it('create should to match object', async () => {
    expect(await controller.create(bodyTest)).toMatchObject(bodyTest);
  });

  it('deposit should to match object', async () => {
    expect(await controller.deposit(idContaTest, valueTest)).toMatchObject({
      idConta: idContaTest,
      value: valueTest,
    });
  });

  it('withdraw should to match object', async () => {
    expect(await controller.withdraw(idContaTest, valueTest)).toMatchObject({
      idConta: idContaTest,
      value: valueTest,
    });
  });

  it('block should to match object', async () => {
    expect(await controller.block(idContaTest)).toMatchObject({
      idConta: idContaTest,
    });
  });
});
