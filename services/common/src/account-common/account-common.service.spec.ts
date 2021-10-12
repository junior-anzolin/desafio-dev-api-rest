import { Test, TestingModule } from '@nestjs/testing';
import { AccountCommonService } from './account-common.service';

describe('AccountCommonService', () => {
  let service: AccountCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountCommonService],
    }).compile();

    service = module.get<AccountCommonService>(AccountCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
