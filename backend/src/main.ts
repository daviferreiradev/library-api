import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import env from '@config/env';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = env().application.port;
  const logger = new Logger('NestApplication');

  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => logger.log(`API is running on port ${port}`));
}
bootstrap();
