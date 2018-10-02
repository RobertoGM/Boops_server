import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from 'ingredient/ingredient.module';
import { IngredientPriceModule } from 'ingredient-price/ingredient-price.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IngredientModule, IngredientPriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
