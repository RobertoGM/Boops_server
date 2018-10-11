import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from 'ingredient/ingredient.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IngredientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
