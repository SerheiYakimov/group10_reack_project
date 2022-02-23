import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function getReportByCategories({ date, type }) {
  const { data } = await axiosServer.get(
    `/transactions/report-category-by-month?date=${date}&type=${type}`,
  );
  console.log(`Report by categories: API `, data);
  return data;
}

async function getReportBySubCategories({ date, type }) {
  const { data } = await axiosServer.get(
    `transactions/report-subcategory-by-month?date=${date}&type=${type}`,
  );
  console.log(`Report by sub-categories:`, data);
  return data;
}

async function getSummaryByMonth(reportData) {
  const { data } = await axiosServer.get(
    `/transactions/report-by-six-month?type=${reportData}`,
  );
  return data;
}

async function getMonthIncomeSum(reportData) {
  console.log(`start Report for summary:`, reportData);
  const { data } = await axiosServer.get(
    `/transactions/total-sum-by-month?date=${reportData}`,
  );
  console.log(`end - total sum in-out for report:`, data);
  return data;
}

async function getMonthOutcomeSum(reportData) {
  console.log(`start Report for summary:`, reportData);
  const { data } = await axiosServer.get(
    `/transactions/total-sum-by-month?date=${reportData}`,
  );
  console.log(`end - total sum in-out for report:`, data);
  return data;
}

async function getApiTotalSumByMonth(date) {
  // date must be in format YYYY-MM (ex, 2022-02)
  const { data } = await axiosServer.get(
    `/transactions/report-sum-by-month?date=${date}`,
  );
  console.log('data from report-api', data);
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
