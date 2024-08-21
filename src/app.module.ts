import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
// import configuration from '@config/env';
import { options } from '@config/typeorm/dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from '@config/env';
// import { UsersModule } from '@modules/users/users.module';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
