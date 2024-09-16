import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('http://test.com/books', () => {
    return HttpResponse.json({
      title: 'Lord of the Rings',
      author: 'J. R. R. Tolkien',
    });
  }),
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  global.gc && global.gc();
});
