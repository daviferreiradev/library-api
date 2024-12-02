import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  ArrayNotEmpty,
} from 'class-validator';

export class RentBookDto {
  @ApiProperty({
    description: 'IDs dos livros que serão incluídos no empréstimo',
    example: [1, 2, 3],
  })
  @IsArray({ message: 'Os livros devem ser enviados como um array de IDs' })
  @ArrayNotEmpty({ message: 'O array de livros não pode estar vazio' })
  bookIds: number[];

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
    description: 'Data de vencimento do empréstimo',
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
}
