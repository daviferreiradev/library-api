import { Controller, Post, Body, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoanService } from './loans.service';
import { RentBookDto } from './dto/rentBook.dto';

@ApiTags('loans')
@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('rent')
  async rentBook(@Body() rentBookDto: RentBookDto) {
    const { bookIds, loanDate, dueDate } = rentBookDto;
    return this.loanService.rentBook(bookIds, loanDate, dueDate);
  }

  @Patch(':id/return')
  async returnBook(@Param('id') id: number) {
    return this.loanService.returnBook(id);
  }
}
