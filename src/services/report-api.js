import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function getReportByCategories({ reportData, type }) {
  const { data } = await axiosServer.get(
    `/transactions/report-category-by-month?date=${reportData}&type=${type}`,
  );
  console.log(`Report by categories:`, data);
  return data;
}

async function getReportBySubCategories(reportData, type) {
  const { data } = await axiosServer.get(
    `/transactions/report-category-by-month?date=${reportData}&type=${type}`,
    reportData,
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

const reportAPI = {
  getReportByCategories,
  getReportBySubCategories,
  getSummaryByMonth,
  getMonthIncomeSum,
  getMonthOutcomeSum,
};

export default reportAPI;
