import useSWRInfinite from 'swr/infinite';
import { fetcher, getKey } from '../services/getOompaList';
import { OompaList } from '../types/oompaTypes';

export const useOompaList = () => {
  const { data, error, isValidating, isLoading, size, setSize } =
    useSWRInfinite<OompaList>(getKey, fetcher, {
      revalidateFirstPage: false,
    });
  console.log('data useOompaList', data);

  return {
    data,
    isLoading: isLoading || isValidating,
    isError: error,
    size,
    setSize,
  };
};
