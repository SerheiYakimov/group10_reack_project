import { axiosServer } from './axios-defaults';

async function getReportByCategories(reportData) {
  const { data } = await axiosServer.get(
    '/transaction/report-category-by-month',
    reportData,
  );
  console.log(`Report by categories:`, data);
  return data;
}

const reportAPI = {
  getReportByCategories,
};

export default reportAPI;
