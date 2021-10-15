import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, Repository } from 'typeorm';
import { Transaction } from '../database/entities/transaction';
import { Today } from '../util/today';
import { NewTransactionValidator } from '../validation/transaction.validator';

@Injectable()
export class TransactionOperationService {
  constructor(
    @InjectRepository(Transaction)
    private readonly __transaction: Repository<Transaction>,
  ) {}

  async create(data: NewTransactionValidator) {
    return await this.__transaction.save(new Transaction(data));
  }

  async checkLimitWithdraw(limit: number, value: number, idConta: string) {
    let { sum: transactionsDay } = await this.__transaction
      .createQueryBuilder('T')
      .select('SUM(T.valor)')
      .where({
        dataTransacao: Between(
          new Date(`${Today()} 00:00:00`),
          new Date(`${Today()} 23:59:59`),
        ),
        valor: LessThan(0),
        idConta,
      })
      .getRawOne();

    if (transactionsDay)
      transactionsDay = Math.abs(parseFloat(transactionsDay));
    else transactionsDay = null;
    limit = parseFloat(limit.toString());

    if (!transactionsDay || transactionsDay < limit)
      if (transactionsDay + value > limit)
        throw new HttpException(
          'O valor de saque ultrapassa o valor máximo do dia',
          400,
        );
      else return true;
    else throw new HttpException('Limite de saque diário excedido', 400);
  }
}
