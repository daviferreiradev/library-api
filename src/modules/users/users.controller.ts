import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly createUsersService: UsersService) {}

  @Post()
  execute(@Body() createUserDto: CreateUserDto) {
    return this.createUsersService.execute(createUserDto);
  }
}
