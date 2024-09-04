import { getKey as getOompaDetailKey } from './getOompaDetail';
import { getKey as getOompaListKey } from './getOompaList';
const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetcher, getOompaDetailKey, getOompaListKey };
