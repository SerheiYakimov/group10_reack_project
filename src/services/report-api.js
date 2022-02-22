import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

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
  console.log(`start Report for summary:`, reportData);
  const { data } = await axiosServer.get(
    `/transaction/report-by-six-month?type=${reportData}`,
  );
  console.log(`end - Report for summary:`, data);
  return data;
}

const reportAPI = {
  getReportByCategories,
  getReportBySubCategories,
  getSummaryByMonth,
};

export default reportAPI;
