import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('books')
  async getBooks(): Promise<any> {
    const response = await fetch('http://test.com/books', {
      headers: { Authorization: 'Bearer mock-token' },
    });

    return response.json();
  }
}
