import axios from 'axios';

import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function getApiTransactions() {
  const { data } = await axiosServer.get('/transactions');
  console.log('inside get api trans', data);
  return data;
}

async function getApiAllIncomeOutcome(transactionType) {
  // transactionType must be either "loss" or "income"
  const { data } = await axiosServer.get(
    `/transactions/?transactionType=${transactionType}`,
  );
  console.log('get all income', data);
  return data;
}

// async function getApiAllOutcome() {
//   const { data } = await axiosServer.get('/transactions/?transactionType=loss');
//   console.log('get all income', data)
//   return data;
// }

async function addTransaction(transaction) {
  const { data } = await axiosServer.post('/transactions', transaction);
  console.log('data after transaction add', data);
  return data;
}

async function deleteApiTransaction(id) {
  const { data } = await axiosServer.delete(`/transactions/${id}`);
  // console.log('id after transaction removal', id);
  // console.log('data after transaction removal', data);
  return data;
}

async function getApiSixMonthsReport(type) {
  // type must be either "loss" or "income"
  const { data } = await axiosServer.get(
    `/transactions/report-by-six-month?type=${type}`,
  );
  return data;
}

async function getApiCategoryMonthReport({ date, type }) {
  // date must be in format YYYY-MM (ex, 2022-02)
  // type must be either "loss" or "income"
  console.log('date', date);
  console.log('type', type);
  const { data } = await axiosServer.get(
    `transactions/report-category-by-month?date=${date}&type=${type}`,
  );
  return data;
}

async function getApiSubcategoryMonthReport({ date, alias }) {
  // date must be in format YYYY-MM (ex, 2022-02)
  // category in request equals to alias in json/category.json
  const { data } = await axiosServer.get(
    `transactions/report-subcategory-by-month?date=${date}&category=${alias}`,
  );
  return data;
}

const transactionsAPI = {
  getApiTransactions,
  getApiAllIncomeOutcome,
  addTransaction,
  deleteApiTransaction,
  getApiSixMonthsReport,
  getApiCategoryMonthReport,
  getApiSubcategoryMonthReport,
};

export default transactionsAPI;
