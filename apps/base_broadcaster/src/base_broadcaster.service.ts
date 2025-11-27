import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseBroadcasterService {
  getHello(): string {
    return 'Hello World!';
  }
}
