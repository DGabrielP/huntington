import { Test, TestingModule } from '@nestjs/testing';
import { CreturesController } from './cretures.controller';
import { CreturesService } from './cretures.service';

describe('CreturesController', () => {
  let controller: CreturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreturesController],
      providers: [CreturesService],
    }).compile();

    controller = module.get<CreturesController>(CreturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
