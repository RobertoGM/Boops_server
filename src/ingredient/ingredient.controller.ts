import { Controller, Post, Body } from '@nestjs/common';
import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) { }

  @Post('search_ingredient')
  findAll(@Body() ingredient?: Ingredient): Promise<Ingredient[]> {
    return this.ingredientService.find(ingredient);
  }

  @Post()
  createIngredient(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.createOne(ingredient);
  }
}