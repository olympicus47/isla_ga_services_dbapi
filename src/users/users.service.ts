import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/index';
import { User } from './user.entity';
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}
  async register(userDto: UserDto) {
    const { email, password } = userDto;
    const hashed_password = await argon.hash(password);
    const user = new User(email, hashed_password);
    await this.userRepository.persistAndFlush(user);
    return { email };
  }

  async login(userDto: UserDto) {
    const { email, password } = userDto;
    const dbUser = await this.findOne(email);
    let pwMatch = false;
    if (dbUser) {
      pwMatch = await argon.verify(dbUser.hashed_password, password);
    }
    if (pwMatch) {
      return { email: dbUser.email };
    }
    throw new ForbiddenException('Credentials are incorrect.');
  }

  async findAll() {
    const users = await this.userRepository.findAll();

    const mappedUsers = users.map((user) => ({ email: user.email }));

    return mappedUsers;
  }

  async findOne(email: string) {
    try {
      return this.userRepository.findOne({ email });
    } catch (err) {
      throw new ForbiddenException('Credentials are incorrect.' + err);
    }
  }

  // async update(id: number, userDto: UserDto) {
  //   return `This action updates a #${id} user`;
  // }

  //   async remove(id: number) {
  //     return `This action removes a #${id} user`;
  //   }
}
