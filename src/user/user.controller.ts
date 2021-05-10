import {
  CacheInterceptor,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Cache } from 'cache-manager';

@Controller('user')
export class UserController {
  private count = 1;
  constructor(
    private readonly service: UserService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll(): Promise<any> {
    await this.cache.set('count', this.count++);
    return await this.service.users();
  }
  @Get('plus')
  async push(): Promise<any> {
    await this.cache.set('count', this.count++);
    return await this.service.users();
  }
}
