const getSummaryData = state => state.report.reportSummaryItems;
const getIncomesData = state => state.report.reportIncimeItems;
const getOutcomesData = state => state.report.reportOutcomeItems;
const getCategoryData = state => state.report.reportChartItems;
const getIncomesSum = state => state.report.reportIncomeSum;
const getOutcomesSum = state => state.report.reportOutcomeSum;

const reportSelectors = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getIncomesSum,
  getOutcomesSum,
};

export default reportSelectors;
