import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) { }

  async getAll(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find();
  }

  async find(ingredient: Ingredient): Promise<Ingredient[]> {
    return await this.ingredientRepository.find(ingredient);
  }

  async insert(ingredient: Ingredient): Promise<InsertResult> {
    return await this.ingredientRepository.insert(ingredient);
  }

  // async addPriceHistory(ingredientName: string, newPrice: {price: number, date: Date}): Promise<any> {
  //   return await this.ingredientRepository.update({ name: 'prueba' }, { priceHistory: { price: 1.5, date: '12/10/2018' } });
  // }
}