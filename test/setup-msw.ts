import { beforeAll, afterAll, afterEach } from 'vitest';
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

const ALLOWED_HOSTS = ['localhost', '::1', '127.0.0.1'];

beforeAll(() => {
  server.listen({
    onUnhandledRequest: (request, print) => {
      const url = new URL(request.url);
      if (ALLOWED_HOSTS.includes(url.hostname)) {
        return;
      }

      print.error();
    },
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  global.gc();
});
