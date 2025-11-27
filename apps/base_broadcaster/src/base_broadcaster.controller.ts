import { Controller, Get } from '@nestjs/common';
import { BaseBroadcasterService } from './base_broadcaster.service';

@Controller()
export class BaseBroadcasterController {
  constructor(private readonly baseBroadcasterService: BaseBroadcasterService) {}

  @Get()
  getHello(): string {
    return this.baseBroadcasterService.getHello();
  }
}
