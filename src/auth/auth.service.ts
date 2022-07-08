import { UsersService } from './../users/users.service';
import { UserDto } from './../users/dto/user.dto';
import {
  Inject,
  Injectable,
  forwardRef,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async verify(dto: UserDto) {
    let pwmatch = false;

    const user = await this.usersService.findOne(dto as UserDto);
    if (user) {
      pwmatch = await this.verifyPassword(user.hashed_password, dto.password);
      if (!pwmatch) {
        throw new UnauthorizedException('Credentials are incorrect');
      }
      const { hashed_password, isAdmin, ...result } = user;
      return result;
    }
    return null;
  }

  async pwHash(password: string) {
    return await argon.hash(password);
  }

  async verifyPassword(hashed: string, plain: string) {
    return await argon.verify(hashed, plain);
  }
}
