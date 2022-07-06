import { UsersService } from './../users/users.service';
import { UserDto } from './../users/dto/user.dto';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async verify(verifiable: Verifiable | any) {
    try {
      // verify in the case we use it with two strings one hashed and one plain
      if (verifiable.plain && typeof verifiable.plain === 'string') {
        return await argon.verify(verifiable.hashed, verifiable.plain);
      }
      // verify in the case we use it with an UserDto which is of the shape {email: string, password: string}
      if (typeof verifiable === 'object') {
        const user = await this.usersService.findOne(verifiable);
        let pwmatch = false;
        if (user) {
          pwmatch = await argon.verify(
            user.hashed_password,
            verifiable.password,
          );
        }
        return pwmatch;
      }
    } catch (err) {
      throw new Error(
        `veify method was passed the wrong type of argument. expected ${String(
          verifiable.__proto__,
        )} got ${String(verifiable)}` + err,
      );
    }
  }

  async pwHash(password: string) {
    return await argon.hash(password);
  }
}

export type Verifiable = UserDto | { plain: string; hashed: string };
