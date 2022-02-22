import { createSlice } from '@reduxjs/toolkit';
import * as reportOperations from './operations';

const initialState = {
  reportIncimeItems: [],
  reportOutcomeItems: [],
  reportSummaryItems: [],
  reportChartItems: [],
  reportIncomeSum: 0.0,
  reportOutcomeSum: 0.0,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [reportOperations.getSummaryData.fulfilled]: (state, action) => {
      state.reportSummaryItems = [...action.payload];
    },
    [reportOperations.getIncomesData.fulfilled]: (state, action) => {
      state.reportIncimeItems = [...action.payload];
    },
    [reportOperations.getOutcomesData.fulfilled]: (state, action) => {
      state.reportOutcomeItems = [...action.payload];
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
