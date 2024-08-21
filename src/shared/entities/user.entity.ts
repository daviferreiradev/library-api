import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Loan } from './loan.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToOne(() => Loan, { cascade: true })
  @JoinColumn()
  loan: Loan;

  @CreateDateColumn({ type: 'bigint' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'bigint' })
  updatedAt: Date;
}
