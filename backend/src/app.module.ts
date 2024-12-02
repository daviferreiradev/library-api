import { Module } from '@nestjs/common';
import { options } from '@config/typeorm/dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from '@config/env';
import { LoansModule } from '@modules/loans/loans.module';
import { BooksModule } from '@modules/books/books.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...options }),
    UsersModule,
    LoansModule,
    BooksModule,
  ],
})
export class AppModule {}
