import {
  UnauthorizedException,
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
  async register(dto: UserDto) {
    if (await this.findOne(dto)) {
      throw new UnauthorizedException('Credentials are incorrect.');
    }
    const user = await this.makeUserFromDto(dto);
    await this.userRepository.persistAndFlush(user);
    delete user.hashed_password;
    return user;
  }

  async login(userDto: UserDto) {
    const usrMatch = await this.authService.verify(userDto);
    if (usrMatch) {
      return usrMatch;
    }
    throw new UnauthorizedException('Credentials are incorrect.');
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
      throw new UnauthorizedException('Credentials are incorrect.' + err);
    }
  }

  // async update(id: number, userDto: UserDto) {
  //   return `This action updates a #${id} user`;
  // }

  //   async remove(id: number) {
  //     return `This action removes a #${id} user`;
  //   }

  // helper functions

  async makeUserFromDto(dto: UserDto) {
    try {
      const hashed_password = await this.authService.pwHash(dto.password);
      const user = new User(dto.email, hashed_password);
      return user;
    } catch (err) {
      return null;
    }
  }
}
