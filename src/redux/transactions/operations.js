import { createAsyncThunk } from '@reduxjs/toolkit';
import getAllTransactions from '../../services/transactions-api';

export const getAllSum = createAsyncThunk(
  '/transactions/total-sum-by-month',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getAllTransactions(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeOperation = createAsyncThunk();
