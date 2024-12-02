import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from '@shared/entities/loan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanRepository {
  constructor(
    @InjectRepository(Loan)
    private readonly repository: Repository<Loan>,
  ) {}

  async create(loan: Loan): Promise<Loan> {
    return this.repository.save(loan);
  }

  async findAll(): Promise<Loan[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Loan> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, loan: Partial<Loan>): Promise<void> {
    await this.repository.update(id, loan);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
