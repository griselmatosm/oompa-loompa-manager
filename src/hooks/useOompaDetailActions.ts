import { useCallback } from 'react';
import { useAppDispatch } from '../hooks/store';
import { setOompaDetail, updateFetchingDate } from '../store/oompaDetailSlice';
import { OompaDetail } from '../types/oompaTypes';

export const useOompaDetailActions = () => {
  const dispatch = useAppDispatch();
  const setOompaDetailAction = useCallback(({id,detail} : {id: string, detail: OompaDetail}) => {
    return dispatch(setOompaDetail({id, detail}));
  }, [dispatch]);

  const setFetchingDateAction = useCallback(({id, fetching_date }: {id: string, fetching_date: string }) => {
    dispatch(updateFetchingDate({id, date: fetching_date}));
  }, [dispatch]);

  return {
    setOompaDetailAction,
    setFetchingDateAction
  }
}