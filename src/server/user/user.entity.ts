import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  states: string;
  @Column()
  role: string;
  @Column()
  token: string;

}
