import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from '@shared/entities/loan.entity';
import { LoanController } from './loans.controller';
import { LoanService } from './loans.service';
import { LoanRepository } from '@shared/repositories/loans.repository';
import { Book } from '@shared/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loan, Book])],
  controllers: [LoanController],
  providers: [LoanService, LoanRepository],
})
export class LoansModule {}
