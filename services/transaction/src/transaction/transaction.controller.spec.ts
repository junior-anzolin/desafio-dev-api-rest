import { Test, TestingModule } from '@nestjs/testing';
import { IPaginationDTO } from '@services/common/types/pagination';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

describe('TransactionController', () => {
  let controller: TransactionController;
  const idContaTest: string = 'f5fceca2-6054-43a9-8557-a425d6d6db37';
  const queryTest: IPaginationDTO = {
    filterDay: '2021-01-01',
    max: 10,
    page: 0,
  };

  class MockTransactionService {
    extract(idConta: string, query: IPaginationDTO) {
      return { idConta, query };
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [
        {
          provide: TransactionService,
          useValue: new MockTransactionService(),
        },
      ],
    }).compile();

    controller = module.get<TransactionController>(TransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('extract should to match object', async () => {
    expect(await controller.extract(idContaTest, queryTest)).toMatchObject({
      idConta: idContaTest,
      query: queryTest,
    });
  });
});
