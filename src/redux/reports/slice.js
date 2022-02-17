import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './operations';

const initialState = {};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [reportOperations.getSummaryData.fulfilled](state, action) {
      state.auth.user.summaryData = action.payload.data.summaryData;
    },
    [reportOperations.getIncomesData.fulfilled](state, action) {
      state.auth.user.incomesData = action.payload.data.incomesData;
    },
    [reportOperations.getOutcomesData.fulfilled](state, action) {
      state.auth.user.outcomesData = action.payload.data.outcomesData;
    },
    [reportOperations.getCategoryData.fulfilled](state, action) {
      state.auth.user.categoryData = action.payload.data.categoryData;
    },
  },
});

export default reportSlice.reducer;
