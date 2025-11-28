import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(BaseBroadcasterModule);
  await app.listen(3000);
}
bootstrap();
