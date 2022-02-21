import { createSlice } from '@reduxjs/toolkit';
import * as reportOperations from './operations';

const initialState = {
  reportIncimeItems: [],
  reportOutcomeItems: [],
  reportSummaryItems: [],
  reportChartItems: [],
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
    [reportOperations.getCategoryData.fulfilled](state, action) {
      state.reportChartItems = [...action.payload];
    },
  },
});

export default reportSlice.reducer;
