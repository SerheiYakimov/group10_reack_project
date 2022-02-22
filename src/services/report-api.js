import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function getReportByCategories({ reportData, type }) {
  const { data } = await axiosServer.get(
    `/transaction/report-category-by-month?date=${reportData}&type=${type}`,
    reportData,
  );
  console.log(`Report by categories:`, data);
  return data;
}

async function getReportBySubCategories(reportData, type) {
  const { data } = await axiosServer.get(
    `/transaction/report-category-by-month?date=${reportData}&type=${type}`,
    reportData,
  );
  console.log(`Report by sub-categories:`, data);
  return data;
}
async function getSummaryByMonth(reportData) {
  console.log(`start Report for summary:`, reportData);
  const { data } = await axiosServer.get(
    `/transaction/report-by-six-month?type=${reportData}`,
  );
  console.log(`end - Report for summary:`, data);
  return data;
}

async function getMonthIncomeSum(reportData) {
  console.log(`start Report for summary:`, reportData);
  const { data } = await axiosServer.get(
    `/transaction/total-sum-by-month?date=${reportData}`,
  );
  console.log(`end - total sum in-out for report:`, data);
  return data;
}

async function getMonthOutcomeSum(reportData) {
  console.log(`start Report for summary:`, reportData);
  const { data } = await axiosServer.get(
    `/transaction/total-sum-by-month?date=${reportData}`,
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
