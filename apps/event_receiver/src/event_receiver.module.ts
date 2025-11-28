import { Module } from '@nestjs/common';
import { EventReceiverClient } from './event-receiver.client';
import { EventReceiverGateway } from './event-receiver.gateway';


@Module({
  imports: [],
  controllers: [],
  providers: [EventReceiverClient, EventReceiverGateway],
})
export class EventReceiverModule {}
