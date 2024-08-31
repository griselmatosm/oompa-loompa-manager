import { OompaList } from '../types/oompaTypes';

const BASE_URL =
  'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const getKey = (pageIndex: number, previousPageData: OompaList) => {
  // reached the end
  if (previousPageData && previousPageData.current === previousPageData.total)
    return null;

  // first page, previousPageData is null
  if (pageIndex === 0) return BASE_URL;

  // add the page to the API endpoint
  return `${BASE_URL}?page=${pageIndex + 1}`;
};
