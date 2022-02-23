import { createAsyncThunk } from '@reduxjs/toolkit';
import reportAPI from '../../services/report-api';

export const getIncomesData = createAsyncThunk(
  '/transactions/report-category-by-month',
  async (date, { rejectWithValue }) => {
    try {
      console.log('req-incomes-data', date);
      const { data } = await reportAPI.getReportByCategories(date);
      console.log('req-incomes-data-res', data);
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
  '/transactions/report-subcategory-by-month',
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
  '/transactions/report-by-six-month',
  async (date, { rejectWithValue }) => {
    console.log('start - operation/getSummaryData', date);
    try {
      const { data } = await reportAPI.getSummaryByMonth(date);
      console.log('end - operation/getSummaryData', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getIncomesSum = createAsyncThunk(
  '/transactions/total-sum-by-month',
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
  '/transactions/total-sum-by-month',
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

const reportOperations = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getIncomesSum,
  getOutcomesSum,
};

export default reportOperations;
