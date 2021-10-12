import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCommonService } from './transaction-common.service';

describe('TransactionCommonService', () => {
  let service: TransactionCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCommonService],
    }).compile();

    service = module.get<TransactionCommonService>(TransactionCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
