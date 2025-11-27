import { Module } from '@nestjs/common';
import { BaseBroadcasterController } from './base_broadcaster.controller';
import { BaseBroadcasterService } from './base_broadcaster.service';

@Module({
  imports: [],
  controllers: [BaseBroadcasterController],
  providers: [BaseBroadcasterService],
})
export class BaseBroadcasterModule {}
