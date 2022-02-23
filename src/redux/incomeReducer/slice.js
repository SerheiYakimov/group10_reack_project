import { createSlice } from '@reduxjs/toolkit';

const IncomeStateSlice = createSlice({
  name: 'incomeState',
  initialState: {
    incomeState: false,
  },
  reducers: {
    changeIncomeState(state, action) {
      state.incomeState = action.payload;
    },
  },
});

export default IncomeStateSlice.reducer;
export const { changeIncomeState } = IncomeStateSlice.actions;
