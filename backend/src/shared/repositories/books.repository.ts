import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '@shared/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(Book)
    private readonly repository: Repository<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    return this.repository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Book> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, book: Partial<Book>): Promise<void> {
    await this.repository.update(id, book);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
