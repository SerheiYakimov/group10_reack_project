const getSummaryData = state => state.report.reportSummaryItems;
const getIncomesData = state => state.report.reportIncomeItems;
const getOutcomesData = state => state.report.reportOutcomeItems;
const getCategoryData = state => state.report.reportChartItems;
const getIncomesSum = state => state.report.reportIncomeSum;
const getOutcomesSum = state => state.report.reportOutcomeSum;
const getChartCategoryAlias = state => state.report.reportCategoryAlias;
const getSumByMonth = state => state.report.data;

const reportSelectors = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getChartCategoryAlias,
  getSumByMonth,
  getIncomesSum,
  getOutcomesSum,
};

export default reportSelectors;
