import { Controller, Post, Body, Get } from '@nestjs/common';
import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { InsertResult } from 'typeorm';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) { }

  @Get()
  async getAll(): Promise<Ingredient[]> {
    return await this.ingredientService.getAll();
  }

  @Get('createDefault')
  createDefault(): Promise<InsertResult> {
    return this.ingredientService.insert({name: 'default', priceHistory: [{price: 1, date: new Date()}]});
  }

  @Post('search_ingredient')
  findAll(@Body() ingredient?: Ingredient): Promise<Ingredient[]> {
    return this.ingredientService.find(ingredient);
  }

  @Post()
  createIngredient(@Body() ingredient: Ingredient): Promise<InsertResult> {
    return this.ingredientService.insert(ingredient);
  }
}