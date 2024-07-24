import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Book } from './book.entity';

@Entity('loans')
export class Loan {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  loanDate: Date;

  @Column()
  returnDate: Date;

  @Column()
  dueDate: Date;

  @Column()
  status: string;

  @OneToMany(() => Book, (book) => book.loan)
  books: Book[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
