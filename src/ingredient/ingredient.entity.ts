import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn() id: string;

  @Column() name: string;

  @Column() priceHistory: {price: number, date: Date}[];

}