import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import TransactionsAPI from '../../services/transactions-api';
import transactionsAPI from '../../services/transactions-api';

// export const getAllSum = createAsyncThunk(
//   '/transactions/total-sum-by-month',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await TransactionsAPI.getApiTransactions();
//       console.log('data from back end', data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

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
  '/transactions/all',
  async (_, { rejectWithValue }) => {
    try {
      // console.log('inside getApi');
      const { data } = await TransactionsAPI.getApiTransactions();
      // console.log('data inside operation', data);
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
      // console.log('transactionType inside getallincome', typeof (transactionType))
      const { data } = await transactionsAPI.getApiAllIncomeOutcome(
        transactionType,
      );
      console.log('data  in get all income', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllOutcome = createAsyncThunk(
  '/transactions/outcome',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.getApiAllIncomeOutcome();
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
      console.log('id after deleting transaction', id);
      console.log('data after deleting transaction', data);

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
      console.log('6 months report');
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
  '/transactions/report-subcategory',
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
