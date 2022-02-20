import axios from 'axios';

import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function getApiTransactions() {
  const { data } = await axiosServer.get('/transactions');
  return data;
}

async function getApiAllIncomeOutcome(transactionType) {
  const { data } = await axiosServer.get('/transactions', transactionType);
  return data;
}

async function addTransaction(transaction) {
  const { data } = await axiosServer.post('/transactions', transaction);
  console.log('data after transaction add', data);
  return data;
}

async function deleteApiTransaction(id) {
  const { data } = await axiosServer.delete(`/transactions/${id}`);
  console.log('data after transaction removal', data);
  return data;
}

const transactionsAPI = {
  getApiTransactions,
  getApiAllIncomeOutcome,
  addTransaction,
  deleteApiTransaction,
};

export default transactionsAPI;
