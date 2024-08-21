import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsersService } from './create.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users/sla')
export class CreateUsersController {
  constructor(private readonly createUsersService: CreateUsersService) {}

  @Post()
  execute(@Body() createUserDto: CreateUserDto) {
    return this.createUsersService.execute(createUserDto);
  }
}
