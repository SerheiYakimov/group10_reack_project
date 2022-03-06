import { axiosServer } from './axios-defaults';

async function getApiTransactions() {
  const { data } = await axiosServer.get('/transactions');
  return data;
}

async function getApiAllIncomeOutcome(transactionType) {
  // transactionType must be either "loss" or "income"
  const { data } = await axiosServer.get(
    `/transactions/?transactionType=${transactionType}`,
  );
  return data;
}

async function addTransaction(transaction) {
  const { data } = await axiosServer.post('/transactions', transaction);
  return data;
}

async function deleteApiTransaction(id) {
  const { data } = await axiosServer.delete(`/transactions/${id}`);
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
