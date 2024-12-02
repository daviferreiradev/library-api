import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray, IsDateString } from 'class-validator';

export class CreateLoanDto {
  @ApiProperty({
    description: 'Data do início do empréstimo',
    example: '2024-12-01',
  })
  @IsNotEmpty({ message: 'A data do empréstimo é obrigatória' })
  @IsDateString(
    {},
    {
      message:
        'A data do empréstimo deve estar no formato ISO 8601 (YYYY-MM-DD)',
    },
  )
  loanDate: Date;

  @ApiProperty({
    description: 'Data de devolução prevista',
    example: '2024-12-15',
  })
  @IsNotEmpty({ message: 'A data de vencimento é obrigatória' })
  @IsDateString(
    {},
    {
      message:
        'A data de vencimento deve estar no formato ISO 8601 (YYYY-MM-DD)',
    },
  )
  dueDate: Date;

  @ApiProperty({
    description: 'IDs dos livros que serão incluídos no empréstimo',
    type: [Number],
    example: [1, 2, 3],
  })
  @IsNotEmpty({
    message: 'É necessário informar ao menos um livro para o empréstimo',
  })
  @IsArray({ message: 'Os livros devem ser enviados como um array de IDs' })
  books: number[];
}
