import { ApiProperty } from '@nestjs/swagger';
import { BookStatus } from '@shared/enums/bookStatus.enum';
import { IsNotEmpty, IsString, IsDate, IsEnum } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: 'Título do livro',
    example: 'O Senhor dos Anéis',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Resumo do livro',
    example: 'Uma jornada épica pela Terra Média.',
  })
  @IsNotEmpty()
  @IsString()
  summary: string;

  @ApiProperty({ description: 'Autor do livro', example: 'J.R.R. Tolkien' })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({
    description: 'Status do livro',
    enum: BookStatus,
    example: BookStatus.DISPONIVEL,
  })
  @IsNotEmpty()
  @IsEnum(BookStatus, {
    message: 'O status deve ser Disponível, Emprestado ou Atrasado',
  })
  status: BookStatus;

  @ApiProperty({ description: 'Categoria do livro', example: 'Ficção' })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Data de lançamento do livro',
    example: '1954-07-29',
  })
  @IsNotEmpty()
  @IsDate()
  releaseDate: Date;
}
