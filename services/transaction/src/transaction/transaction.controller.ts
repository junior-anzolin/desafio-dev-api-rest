import { Controller, Get, Param, Query } from '@nestjs/common';
import { IPaginationDTO } from '@services/common/types/pagination';
import { TransactionService } from './transaction.service';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get(':idConta')
  async extract(
    @Param('idConta') idConta: string,
    @Query() query: IPaginationDTO,
  ) {
    return await this.transactionService.extract(idConta, query);
  }
}
