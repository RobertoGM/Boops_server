import { Module } from '@nestjs/common';
import { IngredientPriceController } from './ingredient-price.controller';
import { IngredientPriceService } from './ingredient-price.service';

@Module({
  controllers: [IngredientPriceController],
  providers: [IngredientPriceService],
})
export class IngredientPriceModule {}
