import { axiosServer } from './axios-defaults';

async function getReportByCategories(reportData) {
  const { data } = await axiosServer.get(
    '/transaction/report-category-by-month',
    reportData,
  );
  console.log(`Report by categories:`, data);
  return data;
}
async function getReportBySubCategories(reportData) {
  const { data } = await axiosServer.get(
    '/transaction/report-subcategory-by-month',
    reportData,
  );
  console.log(`Report by sub-categories:`, data);
  return data;
}
async function getSummaryByMonth(reportData) {
  const { data } = await axiosServer.get(
    '/transaction/report-by-six-month',
    reportData,
  );
  console.log(`Report for summary:`, data);
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
};

export default reportAPI;
