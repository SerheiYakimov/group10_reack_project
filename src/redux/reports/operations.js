import { createAsyncThunk } from '@reduxjs/toolkit';
import reportAPI from '../../services/report-api';
import getReportByCategories from '../../services/report-api';
import getReportBySubCategories from '../../services/report-api';
import getSummaryByMonth from '../../services/report-api';

export const getIncomesData = createAsyncThunk(
  '/transactions/report-category-by-month',
  async (date, { rejectWithValue }) => {
    try {
      console.log('date', date);
      const { data } = await getReportByCategories(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getOutcomesData = createAsyncThunk(
  '/transactions/report-category-by-month',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getReportByCategories(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCategoryData = createAsyncThunk(
  '/transactions/report-subcategory-by-month',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getReportBySubCategories(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getSummaryData = createAsyncThunk(
  '/transactions/report-by-six-month',
  async (date, { rejectWithValue }) => {
    console.log('start - operation/getSummaryData', date);
    try {
      const { data } = await reportAPI.getSummaryByMonth(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getIncomesSum = createAsyncThunk();
export const getOutcomesSum = createAsyncThunk();

const reportOperations = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getIncomesSum,
  getOutcomesSum,
};

export default reportOperations;
