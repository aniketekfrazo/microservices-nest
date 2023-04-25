import { Test, TestingModule } from '@nestjs/testing';
import { NonPayableService } from './non-payable.service';

describe('NonPayableService', () => {
  let service: NonPayableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonPayableService],
    }).compile();

    service = module.get<NonPayableService>(NonPayableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
