import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({});

  // Định vị đường dẫn load tài nguyên
  app.use(express.static('.'));

  // Dùng swagger load hết API
  const config = new DocumentBuilder()
    .setTitle('Node 37')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(8080);
}
bootstrap();

// yarn start
// yarn start:dev => nodemon

// eslint
// prettier

// main => module => controller => service

// Controller: Định nghĩa API
// Service: Định nghĩa chức năng, tính toán, ...

// endpoint
// localhost:8080/demo

// User
// nest g module [tên module]
// nest g controller [tên module] --no-spec
// nest g service [tên module]

// nest g resource [name]
// Auth

// Sử dụng biến môi trường .env

// yarn add @nestjs/config

// yarn add @types/multer

// yarn add @nestjs/swagger swagger-ui-express
