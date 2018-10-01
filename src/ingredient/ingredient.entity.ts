import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryColumn() name: string;

  @Column() price: number;

}