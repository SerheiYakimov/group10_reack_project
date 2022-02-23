const getSummaryData = state => state.report.reportSummaryItems;
const getIncomesData = state => state.report.reportIncomeItems;
const getOutcomesData = state => state.report.reportOutcomeItems;
const getCategoryData = state => state.report.reportChartItems;
const getIncomesSum = state => state.report.reportIncomeSum;
const getOutcomesSum = state => state.report.reportOutcomeSum;

const getSumByMonth = state => state.report.data;
console.log('selector', getSumByMonth);

const reportSelectors = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getSumByMonth,
  getIncomesSum,
  getOutcomesSum,
};

export default reportSelectors;
