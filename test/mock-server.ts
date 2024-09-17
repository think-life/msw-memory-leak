import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  http.get('http://test.com/books', () => {
    return HttpResponse.json({
      title: 'Lord of the Rings',
      author: 'J. R. R. Tolkien',
    });
  }),
);
