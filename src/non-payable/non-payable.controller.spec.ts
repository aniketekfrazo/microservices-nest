import { Test, TestingModule } from '@nestjs/testing';
import { NonPayableController } from './non-payable.controller';
import { NonPayableService } from './non-payable.service';

describe('NonPayableController', () => {
  let controller: NonPayableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NonPayableController],
      providers: [NonPayableService],
    }).compile();

    controller = module.get<NonPayableController>(NonPayableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
