const getSummaryData = state => state.report.summaryData;
const getIncomesData = state => state.report.incomesData;
const getOutcomesData = state => state.report.outcomesData;
const getCategoryData = state => state.report.categoryData;
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
