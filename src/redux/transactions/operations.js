import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import TransactionsAPI from '../../services/transactions-api';
import transactionsAPI from '../../services/transactions-api';

export const getAllSum = createAsyncThunk(
  '/transactions/total-sum-by-month',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await TransactionsAPI.getApiTransactions();
      console.log('data from back end', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeOperation = createAsyncThunk(
  'transactions/removeOperation',
  async id => {
    try {
      await axios.delete(`api/transactions/${id}`);
      return id;
    } catch (error) {}
  },
);

export const getAllUserTransactions = createAsyncThunk(
  '/transactions',
  async (_, { rejectWithValue }) => {
    try {
      console.log('inside getApi');
      const { data } = await TransactionsAPI.getApiTransactions();
      console.log('data inside operation', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllIncome = createAsyncThunk(
  '/transactions',
  async (transactionType, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiAllIncome(transactionType);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllOutcome = createAsyncThunk(
  '/transactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiAllOutcome();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTransactionToStore = createAsyncThunk(
  '/transactions',
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
  '/transactions/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.deleteApiTransaction(id);
      console.log('id after deleting transaction', id);
      console.log('data after deleting transaction', data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const TotalSumByMonth = createAsyncThunk(
  '/transactions/report-sum-by-month',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiTotalSumByMonth(date);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const SixMonthsReport = createAsyncThunk(
  '/transactions/report-sum-by-month',
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
  '/transactions/report-sum-by-month',
  async ({ date, type }, { rejectWithValue }) => {
    try {
      console.log('date', date);
      console.log('type', type);
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
  '/transactions/report-sum-by-month',
  async ({ date, alias }, { rejectWithValue }) => {
    try {
      console.log('date', date);
      console.log('alias', alias);
      const { data } = await transactionsAPI.getApiSubcategoryMonthReport({
        date,
        alias,
      });
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
