import { Test, TestingModule } from '@nestjs/testing';
import { EventReceiverController } from './event_receiver.controller';
import { EventReceiverService } from './event_receiver.service';

describe('EventReceiverController', () => {
  let eventReceiverController: EventReceiverController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventReceiverController],
      providers: [EventReceiverService],
    }).compile();

    eventReceiverController = app.get<EventReceiverController>(EventReceiverController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventReceiverController.getHello()).toBe('Hello World!');
    });
  });
});
