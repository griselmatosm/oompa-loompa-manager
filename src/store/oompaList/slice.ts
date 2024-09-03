import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OompaList } from '../../types/oompaTypes';

interface OompaListFetchingDate {
  fetching_date: string
}

interface OompaListState extends OompaList, OompaListFetchingDate {
  filterTerm: string
}

const initialState: OompaListState = {
  current_page: 1,
  total_pages: 0,
  oompa_list: [],
  fetching_date: '',
  filterTerm: '',
};

export const oompaListSlice = createSlice({
  name: 'oompaList',
  initialState,
  reducers: {
    setOompaList: (state, action: PayloadAction<OompaList>) => {
      state.current_page = action.payload.current_page;
      state.oompa_list = action.payload.oompa_list;
      state.total_pages = action.payload.total_pages;
    },
    setFetchingDate: (state, action: PayloadAction<string>) => {
      state.fetching_date = action.payload;
    },
    setFilterTerm: (state, action: PayloadAction<string>) => {
      state.filterTerm = action.payload;
    },
  },
});

export default oompaListSlice.reducer;

export const { setOompaList, setFetchingDate, setFilterTerm } = oompaListSlice.actions;