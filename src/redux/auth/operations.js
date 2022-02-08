import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserBalance = createAsyncThunk(
  '/users/getUserBalance',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/users/');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
