import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { LoanStatus } from '@shared/enums/loanStatus.enum';

@Entity('loans')
export class Loan {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  loanDate: Date;

  @Column({ nullable: true })
  returnDate: Date;

  @Column()
  dueDate: Date;

  @Column({
    type: 'enum',
    enum: LoanStatus,
    default: LoanStatus.ATIVO,
  })
  status: LoanStatus;

  @OneToMany(() => Book, (book) => book.loan)
  books: Book[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
