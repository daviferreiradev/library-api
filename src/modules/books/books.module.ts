import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Loan } from '@shared/entities/loan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
