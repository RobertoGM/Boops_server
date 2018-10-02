import { Test, TestingModule } from '@nestjs/testing';
import { IngredientPriceController } from './ingredient-price.controller';

describe('IngredientPrice Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [IngredientPriceController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: IngredientPriceController = module.get<IngredientPriceController>(IngredientPriceController);
    expect(controller).toBeDefined();
  });
});
