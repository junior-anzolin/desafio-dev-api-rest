import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '@services/common/database/entities/transaction';
import { IPaginationDTO } from '@services/common/types/pagination';
import { isValid } from 'date-fns';
import { Between, FindConditions, Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly __transaction: Repository<Transaction>,
  ) {}

  async extract(idConta: string, query: IPaginationDTO) {
    const { page = 0, max = 20, filterDay } = query;
    const where: FindConditions<Transaction> = { idConta };

    if (filterDay && isValid(new Date(filterDay)))
      where.dataTransacao = Between(
        new Date(`${filterDay} 00:00:00`),
        new Date(`${filterDay} 23:59:59`),
      );

    return await this.__transaction.findAndCount({
      where,
      take: parseInt(max.toString()),
      skip: parseInt(page.toString()),
      order: {
        dataTransacao: 'DESC',
      },
    });
  }
}
