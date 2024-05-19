import { Test, TestingModule } from '@nestjs/testing';
import { CreturesService } from './cretures.service';

describe('CreturesService', () => {
  let service: CreturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreturesService],
    }).compile();

    service = module.get<CreturesService>(CreturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
