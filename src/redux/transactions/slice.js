import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOps from './operations';

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    monthExpenses: [],
    monthIncome: [],
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
    // [transactionsOps.getExpenses.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    // },
    // [transactionsOps.getIncome.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    // },
    // [transactionsOps.addExpenses.fulfilled]: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // [transactionsOps.addIncome.fulfilled]: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // [transactionsOps.removeOperation.fulfilled](state, action) {
    //   state.items = state.items.filter(({ _id }) => _id !== action.payload);
    // },
    [transactionsOps.getAllExpenses.fulfilled]: (state, action) => {
      state.monthExpenses = [...action.payload];
    },
    [transactionsOps.getAllIncomes.fulfilled]: (state, action) => {
      state.monthIncome = [...action.payload];
    },
  },
});

export default transactionsSlice.reducer;
export const { setDate, goBackMonth, goForwardMonth } =
  transactionsSlice.actions;
