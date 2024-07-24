import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from '@shared/entities/loan.entity';
// import { LoansService } from './loans.service';
// import { LoansController } from './loans.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  controllers: [],
  providers: [],
})
export class LoansModule {}
