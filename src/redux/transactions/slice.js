import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOps from './operations';

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    date: { month, year },
  },
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    goBackMonth: (state, action) => {
      if (Number(state.date.month) === 1) {
        state.date.year = Number(state.date.year) - 1;
        state.date.month = 12;
        return;
      }
      state.date.month = Number(state.date.month) - 1;
    },
    goForwardMonth: (state, action) => {
      if (Number(state.date.month) === 12) {
        state.date.year = Number(state.date.year) + 1;
        state.date.month = 1;
        return;
      }
      state.date.month = Number(state.date.month) + 1;
    },
  },
  extraReducers: {
    [transactionsOps.getAllSum.fulfilled]: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export default transactionsSlice.reducer;
export const { setDate, goBackMonth, goForwardMonth } =
  transactionsSlice.actions;
