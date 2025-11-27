import { Module } from '@nestjs/common';
import { EventReceiverController } from './event_receiver.controller';
import { EventReceiverService } from './event_receiver.service';

@Module({
  imports: [],
  controllers: [EventReceiverController],
  providers: [EventReceiverService],
})
export class EventReceiverModule {}
