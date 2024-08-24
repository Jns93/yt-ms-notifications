import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { addSwagger } from './app/config/swagger.config';
import { addRedisClient } from './app/config/redis.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get<ConfigService>(ConfigService);
  const PORT = configService.get<number>('PORT');
  
  addSwagger(app);
  await app.listen(PORT);

  await addRedisClient(configService);

}
bootstrap();
