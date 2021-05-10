import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async users(): Promise<any> {
    const count = await this.cache.get('count');
    console.log('>>> ', count);

    return await { count };
  }
}
