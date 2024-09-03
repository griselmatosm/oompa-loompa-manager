import { useCallback } from 'react';
import { useAppDispatch } from '../hooks/store';
import { setFetchingDate, setFilterTerm, setOompaList } from '../store/oompaList/slice';
import { OompaList } from '../types/oompaTypes';
export const useOompaListActions = () => {
  const dispatch = useAppDispatch();
  const setOompaListAction = useCallback((oompaList: OompaList) => {
    dispatch(setOompaList(oompaList));
  }, [dispatch]);

  const setFetchingDateAction = useCallback((fetching_date: string) => {
    dispatch(setFetchingDate(fetching_date));
  }, [dispatch]);

  const setFilterTermAction = useCallback((filterTerm: string) => {
    dispatch(setFilterTerm(filterTerm));
  }, [dispatch]);

  return {
    setOompaListAction,
    setFetchingDateAction,
    setFilterTermAction
  }
}