import { Test, TestingModule } from '@nestjs/testing';
import { IngredientPriceService } from './ingredient-price.service';

describe('IngredientPriceService', () => {
  let service: IngredientPriceService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientPriceService],
    }).compile();
    service = module.get<IngredientPriceService>(IngredientPriceService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
