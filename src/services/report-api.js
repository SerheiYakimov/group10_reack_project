import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function getReportByCategories({ date, type }) {
  const { data } = await axiosServer.get(
    `/transactions/report-category-by-month?date=${date}&type=${type}`,
  );
  return data;
}

async function getReportBySubCategories({ date, alias }) {
  const { data } = await axiosServer.get(
    `transactions/report-subcategory-by-month?date=${date}&category=${alias}`,
  );
  return data;
}

async function getSummaryByMonth(reportData) {
  const { data } = await axiosServer.get(
    `/transactions/report-by-six-month?type=${reportData}`,
  );
  return data;
}

async function getMonthIncomeSum(reportData) {
  const { data } = await axiosServer.get(
    `/transactions/total-sum-by-month?date=${reportData}`,
  );
  return data;
}

async function getMonthOutcomeSum(reportData) {
  const { data } = await axiosServer.get(
    `/transactions/total-sum-by-month?date=${reportData}`,
  );
  return data;
}

async function getApiTotalSumByMonth(date) {
  // date must be in format YYYY-MM (ex, 2022-02)
  const { data } = await axiosServer.get(
    `/transactions/report-sum-by-month?date=${date}`,
  );
  return data;
}

const reportAPI = {
  getReportByCategories,
  getReportBySubCategories,
  getSummaryByMonth,
  getApiTotalSumByMonth,
  getMonthIncomeSum,
  getMonthOutcomeSum,
};

export default reportAPI;
