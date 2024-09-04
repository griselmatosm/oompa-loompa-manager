import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { useOompaDetailActions } from '../hooks/useOompaDetailActions';
import { fetcher, getOompaDetailKey } from '../services';
import { RootState } from '../store';
import { OompaDetail } from '../types/oompaTypes';
import { ONE_DAY_MS } from '../utils/constants';


export const useOompaDetail = (id: number) => {
  const { setOompaDetailAction, setFetchingDateAction } = useOompaDetailActions();
  const oompaDetailState = useSelector((state: RootState) => state.oompaDetail.details[id.toString()]);

  const shouldFetch = !oompaDetailState ||
    (new Date().getTime() - new Date(oompaDetailState.fetching_date).getTime() > ONE_DAY_MS);
  const { data, error } = useSWR<OompaDetail>(shouldFetch ? getOompaDetailKey(id) : null, fetcher);

  useEffect(() => {
    if (data) {
      setOompaDetailAction({
        id: id.toString(),
        detail: data
      });
      setFetchingDateAction({
        id: id.toString(),
        fetching_date: new Date().toISOString()
      });
    }
  }, [data, setOompaDetailAction, setFetchingDateAction, id]);

  return {
    oompaDetail: oompaDetailState || data,
    isError: error,
    isLoading: !data && !error
  };
}


