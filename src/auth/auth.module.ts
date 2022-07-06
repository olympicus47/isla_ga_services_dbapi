import { UsersModule } from '../users/users.module';
import { Global, Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthMiddleware } from './auth.middleware';
import { PassportModule } from '@nestjs/passport';

@Global()
@Module({
  imports: [forwardRef(() => UsersModule), PassportModule],
  providers: [AuthService, AuthMiddleware],
  exports: [AuthService, AuthMiddleware],
})
export class AuthModule {}
