import { useEffect, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import { useOompaListActions } from '../hooks/useOompaListActions';
import { fetcher, getKey } from '../services/getOompaList';
import { OompaListPage } from '../types/oompaTypes';

export const useOompaList = () => {
  const { setOompaListAction, setFetchingDateAction } = useOompaListActions();
  const { data, error, isValidating, isLoading, size, setSize } =
    useSWRInfinite<OompaListPage>(getKey, fetcher, {
      revalidateOnFocus: false,
    });
  const oompaList = useMemo(() => data?.flatMap((page) => page.results) || [], [data]);

  useEffect(() => {
    if (data) {
      setOompaListAction({
        current_page: data.length,
        oompa_list: oompaList,
        total_pages: data[0].total,
      });

      setFetchingDateAction(new Date().toISOString());

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    isLoading: isLoading || isValidating,
    isError: error,
    size,
    setSize,
  };
};
