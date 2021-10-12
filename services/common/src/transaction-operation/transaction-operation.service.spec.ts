import { Test, TestingModule } from '@nestjs/testing';
import { TransactionOperationService } from './transaction-operation.service';

describe('TransactionOperationService', () => {
  let service: TransactionOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionOperationService],
    }).compile();

    service = module.get<TransactionOperationService>(
      TransactionOperationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
