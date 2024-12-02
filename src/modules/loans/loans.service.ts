import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '@shared/entities/book.entity';
import { Loan } from '@shared/entities/loan.entity';
import { LoanStatus } from '@shared/enums/loanStatus.enum';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async rentBook(
    bookIds: number[],
    loanDate: Date,
    dueDate: Date,
  ): Promise<Loan> {
    // Verificar se os livros estão disponíveis
    const books = await this.bookRepository.findByIds(bookIds);

    if (books.length !== bookIds.length) {
      throw new NotFoundException('Um ou mais livros não foram encontrados.');
    }

    for (const book of books) {
      if (book.status !== 0) {
        throw new BadRequestException(
          `O livro ${book.title} não está disponível.`,
        );
      }
    }

    // Atualizar o status dos livros
    books.forEach((book) => (book.status = 1));
    await this.bookRepository.save(books);

    // Criar o empréstimo
    const loan = this.loanRepository.create({
      loanDate,
      dueDate,
      status: LoanStatus.ATIVO,
      books,
    });
    return this.loanRepository.save(loan);
  }

  async returnBook(loanId: number): Promise<Loan> {
    const loan = await this.loanRepository.findOne({
      where: { id: loanId },
      relations: ['books'],
    });

    if (!loan) {
      throw new NotFoundException('Empréstimo não encontrado.');
    }

    if (loan.status !== LoanStatus.ATIVO) {
      throw new BadRequestException('O empréstimo já foi finalizado.');
    }

    // Atualizar o status do empréstimo
    loan.status = LoanStatus.DEVOLVIDO;
    loan.returnDate = new Date();

    // Atualizar o status dos livros
    for (const book of loan.books) {
      book.status = 0;
    }
    await this.bookRepository.save(loan.books);
    return this.loanRepository.save(loan);
  }
}
