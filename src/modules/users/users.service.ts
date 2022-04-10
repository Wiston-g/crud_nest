import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  async findAll() {
    return await this.usersRepository.find();
  }
  async create(user: CreateUserDto) {
    await this.usersRepository.insert(user);
    return user;
  }
  async findOne(id: string) {
    return await this.usersRepository.findOne(id);
  }
  async update(id: string, user: UpdateUserDto) {
    await this.usersRepository.update(id, user);
    return user;
  }
  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
