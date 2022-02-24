import { createSlice } from '@reduxjs/toolkit';
import * as reportOperations from './operations';

const initialState = {
  reportIncomeItems: [],
  reportOutcomeItems: [],
  reportSummaryItems: [],
  reportChartItems: [],
  data: [],
  reportIncomeSum: 0.0,
  reportOutcomeSum: 0.0,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [reportOperations.getSummaryData.fulfilled]: (state, action) => {
      state.reportSummaryItems = [...action.payload.result];
    },
    [reportOperations.getIncomesData.fulfilled]: (state, action) => {
      state.reportIncomeItems = [...action.payload.result];
    },
    [reportOperations.getOutcomesData.fulfilled]: (state, action) => {
      state.reportOutcomeItems = [...action.payload.result];
    },
    [reportOperations.getCategoryData.fulfilled](state, action) {
      state.data = [...action.payload];
    },
    [reportOperations.getSumByMonth.fulfilled](state, action) {
      console.log(action.payload.result);
      state.data = [...action.payload.result];
    },
    [reportOperations.getCategoryData.fulfilled]: (state, action) => {
      state.reportChartItems = [...action.payload];
    },
    [reportOperations.getIncomesSum.fulfilled]: (state, action) => {
      state.reportIncomeSum = [...action.payload];
    },
    [reportOperations.getOutcomesSum.fulfilled]: (state, action) => {
      state.reportOutcomeSum = [...action.payload];
    },
  },
});

export default reportSlice.reducer;
