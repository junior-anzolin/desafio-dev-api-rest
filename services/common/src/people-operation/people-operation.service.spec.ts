import { Test, TestingModule } from '@nestjs/testing';
import { PeopleOperationService } from './people-operation.service';

describe('PeopleOperationService', () => {
  let service: PeopleOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleOperationService],
    }).compile();

    service = module.get<PeopleOperationService>(PeopleOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
