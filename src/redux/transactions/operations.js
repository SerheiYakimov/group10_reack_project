import { createAsyncThunk } from '@reduxjs/toolkit';
import TransactionsAPI from '../../services/transactions-api';
import transactionsAPI from '../../services/transactions-api';

export const getAllUserTransactions = createAsyncThunk(
  '/transactions/all',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await TransactionsAPI.getApiTransactions();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllIncome = createAsyncThunk(
  '/transactions/income',
  async (transactionType, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiAllIncomeOutcome(
        transactionType,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllOutcome = createAsyncThunk(
  '/transactions/outcome',
  async (transactionType, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiAllIncomeOutcome(
        transactionType,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTransactionToStore = createAsyncThunk(
  '/transactions/add',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.addTransaction(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  '/transactions/remove',

  async (id, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.deleteApiTransaction(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const TotalSumByMonth = createAsyncThunk(
  '/transactions/report-total-sum',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiTotalSumByMonth(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const SixMonthsReport = createAsyncThunk(
  '/transactions/report-by-six-month',
  async (type, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiSixMonthsReport(type);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const CategoryMonthReport = createAsyncThunk(
  '/transactions/report-category',
  async ({ date, type }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiCategoryMonthReport({
        date,
        type,
      });
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const SubcategoryMonthReport = createAsyncThunk(
  '/transactions/report-subcategory',
  async ({ date, alias }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiSubcategoryMonthReport({
        date,
        alias,
      });
      console.log(data, 'DATA_OPERATION');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
