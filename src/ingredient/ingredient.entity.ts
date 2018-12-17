import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';

@Entity()
export class Ingredient {

  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  @Index({ unique: true })
  name: string;

  @Column()
  priceHistory: {price: number, date: Date}[];

}