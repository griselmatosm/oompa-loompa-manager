import { http, HttpResponse } from 'msw';
import { pageData } from '../__mocks__/pageDataMock';
import { BASE_URL } from '../utils/constants';

export const handlers = [
  http.get(BASE_URL, async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';

    return HttpResponse.json(pageData[page] || pageData[1]);
  }),
]