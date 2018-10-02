import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) { }

  async find(ingredient: Ingredient): Promise<Ingredient[]> {
    return await this.ingredientRepository.find(ingredient);
  }

  async createOne(ingredient: Ingredient): Promise<Ingredient> {
    return await this.ingredientRepository.create(ingredient);
  }
}