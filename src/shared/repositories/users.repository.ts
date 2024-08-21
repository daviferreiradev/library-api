import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@shared/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, user: Partial<User>): Promise<void> {
    await this.repository.update(id, user);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
