import { Test, TestingModule } from '@nestjs/testing';
import { PeopleCommonService } from './people-common.service';

describe('PeopleCommonService', () => {
  let service: PeopleCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleCommonService],
    }).compile();

    service = module.get<PeopleCommonService>(PeopleCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
