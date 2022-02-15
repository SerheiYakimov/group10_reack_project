import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import getAllTransactions from '../../services/transactions-api';

// export const getExpenses = createAsyncThunk(
//   'transactions/getExpTransactions',
//   async () => {
//     try {
//       const { data } = await axios.get('/api/transactions/expenses');
//       return data.result.transactions;
//     } catch (error) {
//       return [];
//     }
//   },
// );

// export const getIncome = createAsyncThunk(
//   'transactions/getIncTransactions',
//   async () => {
//     try {
//       const { data } = await axios.get('/api/transactions/income');
//       return data.result.transactions;
//     } catch (error) {
//       return [];
//     }
//   },
// );

// export const addExpenses = createAsyncThunk(
//   'transactions/addExpTransaction',
//   async ({ typeTransaction, date, description, categoryId, value }) => {
//     try {
//       const newTransaction = {
//         description: description,
//         value: value,
//         typeTransaction: typeTransaction,
//       };
//       const { data } = await axios.post(
//         `/api/transactions/expense/${categoryId}/?day=${date.day}&month=${date.month}&year=${date.year}`,
//         newTransaction,
//       );
//       return data.result.result;
//     } catch (error) {
//       return [];
//     }
//   },
// );

// export const addIncome = createAsyncThunk(
//   'transactions/addIncTransaction',
//   async ({ typeTransaction, date, description, categoryId, value }) => {
//     try {
//       const newTransaction = {
//         description: description,
//         value: value,
//         typeTransaction: typeTransaction,
//       };
//       const { data } = await axios.post(
//         `/api/transactions/income/${categoryId}/?day=${date.day}&month=${date.month}&year=${date.year}`,
//         newTransaction,
//       );
//       return data.result.result;
//     } catch (error) {
//       return [];
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

// export const getAllExpenses = createAsyncThunk(
//   'transactions/allExpenses',
//   async year => {
//     try {
//       const { data } = await axios.get(`/api/reports/expenses?year=${year}`);
//       return data.result.finalReportArray;
//     } catch (error) {}
//   },
// );
// export const getAllIncome = createAsyncThunk(
//   'transactions/allIncome',
//   async year => {
//     try {
//       const { data } = await axios.get(`/api/reports/income?year=${year}`);
//       return data.result.finalReportArray;
//     } catch (error) {}
//   },
// );

export const getAllExpenses = createAsyncThunk(
  '/transactions/total-sum-by-month/${id}',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllTransactions('расход');
      return data.result.totalSum;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllIncomes = createAsyncThunk(
  '/transactions/total-sum-by-month/${id}',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllTransactions('доход');
      return data.result.totalSum;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
