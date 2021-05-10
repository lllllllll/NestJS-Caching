import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10,
      max: 5,
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
