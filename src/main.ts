import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
