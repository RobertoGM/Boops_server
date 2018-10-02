import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class IngredientPrice {
  @Column() price: string;

  @Column() date: Date;

}