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
      console.log('before getApiAllIncomeOutcome');
      console.log('transactionType', transactionType);
      const { data } = await transactionsAPI.getApiAllIncomeOutcome(
        transactionType,
      );
      console.log('data with all income', data);
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
  '/transactions',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.deleteApiTransaction(id);
      console.log('data after deleting transaction', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
