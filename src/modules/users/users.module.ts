import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@shared/entities/user.entity';
import { CreateUsersController } from './contexts/create/create.controller';
import { CreateUsersService } from './contexts/create/create.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CreateUsersController],
  providers: [CreateUsersService],
})
export class UsersModule {}
