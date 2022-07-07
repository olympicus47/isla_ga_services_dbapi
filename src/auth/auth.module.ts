import { Global, Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthMiddleware } from './auth.middleware';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';

@Global()
@Module({
  imports: [forwardRef(() => UsersModule), PassportModule],
  providers: [AuthService, AuthMiddleware, LocalStrategy],
  exports: [AuthService, AuthMiddleware, LocalStrategy],
})
export class AuthModule {}
