import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Loan } from './loan.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column()
  author: string;

  @Column()
  status: string;

  @Column()
  category: string;

  @Column()
  releaseDate: Date;

  @ManyToOne(() => Loan, (loan) => loan.books)
  loan: Loan;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
