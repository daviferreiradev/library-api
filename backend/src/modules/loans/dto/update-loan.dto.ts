import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanDto } from './createLoan.dto';

export class UpdateLoanDto extends PartialType(CreateLoanDto) {}
