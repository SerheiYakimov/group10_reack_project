import { createAsyncThunk } from '@reduxjs/toolkit';
import reportAPI from '../../services/report-api';

export const getIncomesData = createAsyncThunk(
  '/report/report-category-by-month',
  async ({ date, type }, { rejectWithValue }) => {
    try {
      console.log('req-incomes-data', { date, type });
      const { data } = await reportAPI.getReportByCategories({ date, type });
      console.log('req-incomes-data-res', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getOutcomesData = createAsyncThunk(
  '/report/report-category-by-month-outcomes',
  async (date, { rejectWithValue }) => {
    try {
      console.log('req-outcomes-data', date);
      const { data } = await reportAPI.getReportByCategories(date);
      console.log('req-outcomes-data-res', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCategoryData = createAsyncThunk(
  '/report/report-subcategory-by-month',
  async (date, { rejectWithValue }) => {
    try {
      console.log('req-category-data', date);
      const { data } = await reportAPI.getReportBySubCategories(date);
      console.log('req-category-data-res', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getSummaryData = createAsyncThunk(
  '/report/report-by-six-month',
  async (date, { rejectWithValue }) => {
    try {
      console.log('start - operation/getSummaryData', date);
      const { data } = await reportAPI.getSummaryByMonth(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getIncomesSum = createAsyncThunk(
  '/report/total-sum-by-month',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await reportAPI.getMonthIncomeSum(date);
      console.log('data from back end', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getOutcomesSum = createAsyncThunk(
  '/report/total-sum-by-month-outcomes',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await reportAPI.getMonthOutcomeSum(date);
      console.log('data from back end', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getSumByMonth = createAsyncThunk(
  '/report/report-sum-by-month',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await reportAPI.getApiTotalSumByMonth(date);
      // console.log('data form operetion', data);
      // console.log('date form operetion', date);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const reportOperations = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getSumByMonth,
  getIncomesSum,
  getOutcomesSum,
};

export default reportOperations;
