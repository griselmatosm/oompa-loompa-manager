import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OompaDetail } from '../types/oompaTypes';
interface OompaDetailState {
  details: { [id: string]: OompaDetail & { fetching_date: string } };
}

const initialState: OompaDetailState = {
  details: {},
};

export const oompaDetailSlice = createSlice({
  name: 'oompaDetail',
  initialState,
  reducers: {
    setOompaDetail: (state, action: PayloadAction<{ id: string, detail: OompaDetail }>) => {
      const { id, detail } = action.payload;
      state.details[id] = {
        ...detail,
        fetching_date: new Date().toISOString(),
      };
    },
    updateFetchingDate: (state, action: PayloadAction<{ id: string, date: string }>) => {
      if (state.details[action.payload.id]) {
        state.details[action.payload.id].fetching_date = action.payload.date;
      }
    },
  },
});

export const { setOompaDetail, updateFetchingDate } = oompaDetailSlice.actions;

export default oompaDetailSlice.reducer;