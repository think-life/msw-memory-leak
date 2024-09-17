import { describe, it, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { type NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../../src/app.module';

describe('Root', () => {
  let app: NestExpressApplication;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    app.getHttpServer().closeAllConnections();
    app.getHttpServer().close();
    app.getHttpServer().removeAllListeners();
    await app.close();
    await module.close();
  });

  it(`GET /`, () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it(`GET /books`, () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect({ title: 'Lord of the Rings', author: 'J. R. R. Tolkien' });
  });
});
