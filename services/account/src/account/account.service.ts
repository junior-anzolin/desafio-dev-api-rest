import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '@services/common/database/entities/account';
import { PeopleOperationService } from '@services/common/people-operation/people-operation.service';
import { TransactionOperationService } from '@services/common/transaction-operation/transaction-operation.service';
import { AccountValidator } from '@services/common/validation/account.validator';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly __account: Repository<Account>,

    private readonly peopleOperationService: PeopleOperationService,
    private readonly transactionOperationService: TransactionOperationService,
  ) {}

  async get(idConta: string) {
    const account = await this.__account.findOne(idConta, {
      where: { flagAtivo: true },
    });
    if (!account)
      throw new HttpException('Conta não encontrada ou desativada', 400);

    return account;
  }

  async balance(idConta: string) {
    const { saldo } = await this.get(idConta);

    return {
      saldo,
    };
  }

  async create(data: AccountValidator) {
    await this.peopleOperationService.get(data.idPessoa);

    return await this.__account.save(new Account(data));
  }

  async deposit(idConta, value) {
    const account = await this.get(idConta);
    let saldo = parseFloat(account.saldo.toString());
    saldo += value;

    account.saldo = saldo;
    await this.__account.save(account);

    await this.transactionOperationService.create({
      idConta,
      valor: value,
    });

    return await this.get(idConta);
  }

  async withdraw(idConta, value) {
    const account = await this.get(idConta);
    let saldo = parseFloat(account.saldo.toString());

    if (saldo >= value) saldo -= value;
    else throw new HttpException('Saldo insulficiente', 400);

    await this.transactionOperationService.checkLimitWithdraw(
      account.limiteSaqueDiario,
      value,
      idConta,
    );

    account.saldo = saldo;
    await this.__account.save(account);

    await this.transactionOperationService.create({
      idConta,
      valor: -value,
    });

    return await this.get(idConta);
  }

  async block(idConta) {
    const account = await this.get(idConta);
    const saldo = parseFloat(account.saldo.toString());

    if (saldo !== 0)
      throw new HttpException(
        'É necessário zerar o saldo da conta antes de bloquear',
        400,
      );

    account.flagAtivo = false;

    return await this.__account.save(account);
  }
}
