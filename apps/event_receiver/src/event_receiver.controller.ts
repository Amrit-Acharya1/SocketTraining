import { Controller, Get } from '@nestjs/common';
import { EventReceiverService } from './event_receiver.service';

@Controller()
export class EventReceiverController {
  constructor(private readonly eventReceiverService: EventReceiverService) {}

  @Get()
  getHello(): string {
    return this.eventReceiverService.getHello();
  }
}
