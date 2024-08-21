import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '@shared/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateUsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Promise DTO
  public async execute(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
