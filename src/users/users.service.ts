import {
  ForbiddenException,
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserDto } from './dto/index';
import { User } from './user.entity';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  async register(userDto: UserDto) {
    const hashed_password = await this.authService.pwHash(userDto.password);
    const user = new User(userDto.email, hashed_password);
    await this.userRepository.persistAndFlush(user);
    return { email: userDto.email };
  }

  async login(userDto: UserDto) {
    const pwMatch = this.authService.verify(userDto);

    if (pwMatch) {
      return { email: userDto.email };
    }
    throw new ForbiddenException('Credentials are incorrect.');
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    const mappedUsers = users.map((user) => ({ email: user.email }));
    return mappedUsers;
  }

  async findOne(userDto: UserDto) {
    try {
      return await this.userRepository.findOne({ email: userDto.email });
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
