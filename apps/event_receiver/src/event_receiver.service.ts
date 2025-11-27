import { Injectable } from '@nestjs/common';

@Injectable()
export class EventReceiverService {
  getHello(): string {
    return 'Hello World!';
  }
}
