import { Test, TestingModule } from '@nestjs/testing';
import { BaseBroadcasterController } from './base_broadcaster.controller';
import { BaseBroadcasterService } from './base_broadcaster.service';

describe('BaseBroadcasterController', () => {
  let baseBroadcasterController: BaseBroadcasterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BaseBroadcasterController],
      providers: [BaseBroadcasterService],
    }).compile();

    baseBroadcasterController = app.get<BaseBroadcasterController>(BaseBroadcasterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(baseBroadcasterController.getHello()).toBe('Hello World!');
    });
  });
});
